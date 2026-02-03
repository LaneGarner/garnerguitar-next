import crypto from "crypto";

interface SignedUrlOptions {
  expiresIn?: number; // seconds, default 3600 (1 hour)
}

/**
 * Generate a signed URL for a Cloudflare Stream video
 * This prevents direct access to videos without proper authorization
 */
export function generateSignedStreamUrl(
  videoId: string,
  options: SignedUrlOptions = {}
): string {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const signingKeyId = process.env.CLOUDFLARE_STREAM_SIGNING_KEY_ID;
  const signingKeyJwk = process.env.CLOUDFLARE_STREAM_SIGNING_KEY_JWK;

  if (!accountId || !signingKeyId || !signingKeyJwk) {
    throw new Error("Cloudflare Stream signing credentials not configured");
  }

  const expiresIn = options.expiresIn || 3600;
  const expiry = Math.floor(Date.now() / 1000) + expiresIn;

  // Create JWT header
  const header = {
    alg: "RS256",
    kid: signingKeyId,
  };

  // Create JWT payload
  const payload = {
    sub: videoId,
    kid: signingKeyId,
    exp: expiry,
    accessRules: [
      {
        type: "any",
        action: "allow",
      },
    ],
  };

  // Encode header and payload
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));

  // Sign the token
  const signingKey = parseJwk(signingKeyJwk);
  const signature = signToken(`${encodedHeader}.${encodedPayload}`, signingKey);

  const token = `${encodedHeader}.${encodedPayload}.${signature}`;

  // Return the signed embed URL
  return `https://customer-${accountId}.cloudflarestream.com/${videoId}/iframe?token=${token}`;
}

function base64UrlEncode(str: string): string {
  return Buffer.from(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

function parseJwk(jwkString: string): crypto.KeyObject {
  const jwk = JSON.parse(jwkString);
  return crypto.createPrivateKey({ key: jwk, format: "jwk" });
}

function signToken(data: string, privateKey: crypto.KeyObject): string {
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(data);
  const signature = sign.sign(privateKey);
  return base64UrlEncode(signature.toString("base64"));
}

/**
 * Alternative: Get a signed URL using Cloudflare API
 * Use this if you prefer API-based signing over JWT
 */
export async function getSignedStreamUrlViaApi(
  videoId: string,
  options: SignedUrlOptions = {}
): Promise<string> {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_STREAM_API_TOKEN;

  if (!accountId || !apiToken) {
    throw new Error("Cloudflare Stream API credentials not configured");
  }

  const expiresIn = options.expiresIn || 3600;
  const expiry = Math.floor(Date.now() / 1000) + expiresIn;

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/${videoId}/token`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        exp: expiry,
        accessRules: [
          {
            type: "any",
            action: "allow",
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to generate signed URL: ${error}`);
  }

  const data = await response.json();
  const token = data.result?.token;

  if (!token) {
    throw new Error("No token returned from Cloudflare");
  }

  return `https://customer-${accountId}.cloudflarestream.com/${videoId}/iframe?token=${token}`;
}
