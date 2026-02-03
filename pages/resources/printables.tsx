import Image from "next/image";
import Link from "next/link";
import { Layout } from "../../components";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

const Printables = (): JSX.Element => {
  return (
    <Layout>
      <PrintablesStyled>
        <Link href="/resources">&larr; Back to Resources</Link>

        <h1>Printables</h1>
        <p>Downloadable PDFs for practice and study.</p>

        <h2>Blank Notation Sheets</h2>
        <div className="printables-grid">
          <a href="/pdf/staff-paper-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="printable-card" aria-label="Download Staff paper PDF">
            <h3>Staff</h3>
            <Image src="/images/staff-guitar-lessons-austin-texas.png" width={150} height={100} alt="" />
            <span className="download-label">Download PDF</span>
          </a>

          <a href="/pdf/tab-paper-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="printable-card" aria-label="Download Tab paper PDF">
            <h3>Tab</h3>
            <Image src="/images/tab-guitar-lessons-austin-texas.png" width={150} height={100} alt="" />
            <span className="download-label">Download PDF</span>
          </a>

          <a href="/pdf/staff-and-tab-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="printable-card" aria-label="Download Staff and Tab paper PDF">
            <h3>Staff & Tab</h3>
            <Image src="/images/staff-and-tab-guitar-lessons-austin-texas.png" width={150} height={100} alt="" />
            <span className="download-label">Download PDF</span>
          </a>

          <a href="/pdf/bass-tab-paper-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="printable-card" aria-label="Download Bass Tab paper PDF">
            <h3>Bass Tab</h3>
            <Image src="/images/bass-tab-guitar-lessons-austin-texas.png" width={150} height={100} alt="" />
            <span className="download-label">Download PDF</span>
          </a>

          <a href="/pdf/staff-and-bass-tab-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="printable-card" aria-label="Download Staff and Bass Tab paper PDF">
            <h3>Staff & Bass Tab</h3>
            <Image src="/images/staff-and-bass-tab-guitar-lessons-austin-texas.png" width={150} height={100} alt="" />
            <span className="download-label">Download PDF</span>
          </a>
        </div>

        <h2>Neck Diagrams</h2>
        <div className="printables-grid">
          <a href="/pdf/5-guitar-neck-diagrams-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="printable-card" aria-label="Download 5 Guitar Necks diagram PDF">
            <h3>5 Guitar Necks</h3>
            <Image src="/images/5-guitar-necks-guitar-lessons-austin-texas.png" width={150} height={100} alt="" />
            <span className="download-label">Download PDF</span>
          </a>

          <a href="/pdf/9-guitar-neck-diagrams-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="printable-card" aria-label="Download 9 Guitar Necks diagram PDF">
            <h3>9 Guitar Necks</h3>
            <Image src="/images/9-guitar-necks-guitar-lessons-austin-texas.png" width={150} height={100} alt="" />
            <span className="download-label">Download PDF</span>
          </a>
        </div>

        <p className="request-note">
          <em>Is there something missing here that you would find useful? <a href="mailto:lane@garnerguitar.com">Let me know!</a></em>
        </p>
      </PrintablesStyled>
    </Layout>
  );
};

export default Printables;

const PrintablesStyled = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;

  > a {
    color: ${theme.colors.navy};
    text-decoration: none;
    display: inline-block;
    margin-bottom: 1rem;

    &:hover {
      text-decoration: underline;
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.navy};
      outline-offset: 2px;
    }
  }

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

  .printables-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
  }

  .printable-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${theme.colors.neutral[12]};
    border-radius: ${theme.sizes.s};
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: ${theme.utils.shadows.primary};
    }

    &:focus-visible {
      outline: 3px solid ${theme.colors.green};
      outline-offset: 2px;
    }

    h3 {
      margin: 0 0 0.75rem 0;
      font-size: 1rem;
    }

    img {
      margin-bottom: 0.75rem;
    }

    .download-label {
      display: inline-block;
      background: ${theme.colors.navy};
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      font-size: 0.9rem;
    }
  }

  .request-note {
    margin-top: 2rem;
    text-align: center;

    a {
      color: ${theme.colors.navy};
    }
  }
`;
