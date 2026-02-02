import Image from "next/image";
import Link from "next/link";
import { Layout } from "../../components";
import styled from "styled-components";

const Printables = (): JSX.Element => {
  return (
    <Layout>
      <PrintablesStyled>
        <Link href="/resources">&larr; Back to Resources</Link>

        <h1>Printables</h1>
        <p>Downloadable PDFs for practice and study.</p>

        <h2>Blank Notation Sheets</h2>
        <div className="printables-grid">
          <div className="printable-card">
            <h3>Staff</h3>
            <Image src="/images/staff-guitar-lessons-austin-texas.png" width={150} height={100} alt="Staff paper" />
            <a href="/pdf/staff-paper-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
              Download PDF
            </a>
          </div>

          <div className="printable-card">
            <h3>Tab</h3>
            <Image src="/images/tab-guitar-lessons-austin-texas.png" width={150} height={100} alt="Tab paper" />
            <a href="/pdf/tab-paper-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
              Download PDF
            </a>
          </div>

          <div className="printable-card">
            <h3>Staff & Tab</h3>
            <Image src="/images/staff-and-tab-guitar-lessons-austin-texas.png" width={150} height={100} alt="Staff and tab paper" />
            <a href="/pdf/staff-and-tab-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
              Download PDF
            </a>
          </div>

          <div className="printable-card">
            <h3>Bass Tab</h3>
            <Image src="/images/bass-tab-guitar-lessons-austin-texas.png" width={150} height={100} alt="Bass tab paper" />
            <a href="/pdf/bass-tab-paper-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
              Download PDF
            </a>
          </div>

          <div className="printable-card">
            <h3>Staff & Bass Tab</h3>
            <Image src="/images/staff-and-bass-tab-guitar-lessons-austin-texas.png" width={150} height={100} alt="Staff and bass tab paper" />
            <a href="/pdf/staff-and-bass-tab-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
              Download PDF
            </a>
          </div>
        </div>

        <h2>Neck Diagrams</h2>
        <div className="printables-grid">
          <div className="printable-card">
            <h3>5 Guitar Necks</h3>
            <Image src="/images/5-guitar-necks-guitar-lessons-austin-texas.png" width={150} height={100} alt="5 guitar necks" />
            <a href="/pdf/5-guitar-neck-diagrams-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
              Download PDF
            </a>
          </div>

          <div className="printable-card">
            <h3>9 Guitar Necks</h3>
            <Image src="/images/9-guitar-necks-guitar-lessons-austin-texas.png" width={150} height={100} alt="9 guitar necks" />
            <a href="/pdf/9-guitar-neck-diagrams-guitar-lessons-austin-texas.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
              Download PDF
            </a>
          </div>
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
    color: #0066cc;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 1rem;

    &:hover {
      text-decoration: underline;
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
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;

    h3 {
      margin: 0 0 0.75rem 0;
      font-size: 1rem;
    }

    img {
      margin-bottom: 0.75rem;
    }

    .download-btn {
      display: inline-block;
      background: #0066cc;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      text-decoration: none;
      font-size: 0.9rem;

      &:hover {
        background: #0055aa;
      }
    }
  }

  .request-note {
    margin-top: 2rem;
    text-align: center;

    a {
      color: #0066cc;
    }
  }
`;
