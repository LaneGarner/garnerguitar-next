import Link from "next/link";
import { Layout } from "../../components";
import styled from "styled-components";

const Resources = (): JSX.Element => {
  return (
    <Layout>
      <ResourcesStyled>
        <h1>Resources</h1>
        <p>Helpful tools and downloads for guitarists.</p>

        <div className="resources-grid">
          <Link href="/resources/tuner">
            <div className="resource-card">
              <h2>Tuner</h2>
              <p>Tuner app recommendations for beginners and advanced players</p>
            </div>
          </Link>

          <Link href="/resources/apps-for-musicians">
            <div className="resource-card">
              <h2>Apps for Musicians</h2>
              <p>Recommended apps for tuning, practice, and reading music</p>
            </div>
          </Link>

          <Link href="/resources/printables">
            <div className="resource-card">
              <h2>Printables</h2>
              <p>Blank staff paper, tab paper, and neck diagrams</p>
            </div>
          </Link>

          <a href="https://www.google.com/search?q=metronome" target="_blank" rel="noopener noreferrer">
            <div className="resource-card">
              <h2>Metronome</h2>
              <p>Google's built-in metronome tool</p>
            </div>
          </a>
        </div>

        <h2>Connect</h2>
        <ul className="social-links">
          <li><a href="https://www.youtube.com/c/garnerguitar" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li><a href="https://www.instagram.com/garnerguitar" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.facebook.com/garnerguitar" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://LaneGarner.com" target="_blank" rel="noopener noreferrer">Lane Garner Music</a></li>
        </ul>
      </ResourcesStyled>
    </Layout>
  );
};

export default Resources;

const ResourcesStyled = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    margin-bottom: 0.5rem;
  }

  > p {
    margin-bottom: 2rem;
    color: #666;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .resource-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    cursor: pointer;
    transition: box-shadow 0.2s, transform 0.2s;

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

  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    padding: 0;

    a {
      color: #0066cc;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
