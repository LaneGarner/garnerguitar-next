import { FormEvent, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Layout } from "../components";
import { createClient } from "../lib/supabase/client";
import { theme } from "../utils/styles/theme";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (password.length < 8) return setMessage("Use at least 8 characters.");
    if (password !== confirmPassword) return setMessage("Passwords do not match.");
    setBusy(true); setMessage("");
    const { error } = await createClient().auth.updateUser({ password });
    setBusy(false);
    if (error) return setMessage(error.message);
    setMessage("Your password has been updated. Taking you to the course catalog…");
    setTimeout(() => router.push("/courses"), 1000);
  };

  return <Layout><Head><title>Choose a New Password | Garner Guitar</title></Head><ResetStyled><form onSubmit={submit}><h1>Choose a new password</h1><p>Enter the new password you want to use for Garner Guitar.</p>{message && <div role="status">{message}</div>}<label>New password<input type="password" minLength={8} required value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" /></label><label>Confirm password<input type="password" minLength={8} required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="new-password" /></label><button disabled={busy}>{busy ? "Updating…" : "Update password"}</button></form></ResetStyled></Layout>;
}

const ResetStyled = styled.div`
  min-height:calc(100vh - ${theme.sizes.header});display:grid;place-items:center;padding:2rem;
  form{width:min(420px,100%);${theme.utils.cards.dark};display:grid;gap:1rem}h1,p{margin:0}label{display:grid;gap:.5rem}input{padding:.8rem;background:#222;border:1px solid #555;border-radius:6px;color:white}button{padding:.8rem;background:${theme.colors.green};border:0;border-radius:6px;font-weight:700}div[role=status]{padding:.8rem;background:#173c34;border-radius:6px}
`;
