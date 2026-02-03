import Image from "next/image";
import Link from "next/link";
import { Layout } from "../../components";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

const Resources = (): JSX.Element => {
  return (
    <Layout>
      <ResourcesStyled>
        <h1>Resources</h1>
        <p>Helpful tools and downloadables for guitarists and guitar teachers.</p>

        <div className="resources-grid">
          <a
            href="https://shedr.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-card shedr-card"
          >
            <h2>Shedr</h2>
            <p>
              Musicians&apos; practice toolkit with metronome, tuner, and
              practice tools.
            </p>
            <div className="shedr-image">
              <Image
                src="/images/shedr-screenshot.webp"
                alt="Shedr app screenshot"
                width={280}
                height={175}
              />
            </div>
          </a>

          <Link href="/resources/printables" className="resource-card">
            <h2>Printables</h2>
            <p>Blank staff paper, tab paper, and neck diagrams. Useful for teaching guitar lessons or just working something out to practice.</p>
          </Link>
        </div>
      </ResourcesStyled>
    </Layout>
  );
};

export default Resources;

const ResourcesStyled = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 1rem;
  }

  h1 {
    margin-bottom: 0.5rem;
    text-align: center;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.5rem;
    }
  }

  > p {
    margin-bottom: 2rem;
    color: #666;
    text-align: center;

    @media (max-width: ${theme.breakpoints.sm}) {
      margin-bottom: 1.5rem;
      font-size: 1em;
    }
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .resources-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  }

  .resource-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    cursor: pointer;
    transition: box-shadow 0.2s, transform 0.2s;
    text-decoration: none;
    color: inherit;
    display: block;

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    h2 {
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
    }

    p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }
  }

  .shedr-card {
    display: flex;
    flex-direction: column;

    .shedr-image {
      margin-top: 1rem;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

      img {
        display: block;
        width: 100%;
        height: auto;
        max-width: 280px;
      }
    }
  }
`;
