import Image from "next/image";
import Link from "next/link";
import { Layout } from "../../components";
import styled from "styled-components";

const AppsForMusicians = (): JSX.Element => {
  return (
    <Layout>
      <AppsForMusiciansStyled>
        <Link href="/resources">&larr; Back to Resources</Link>

        <h1>Apps for Musicians</h1>
        <p>These are some of my favorite apps for musicians that I use both for teaching as well as performing. Note: I am an Apple and iOS user so some of the apps may not have Android versions available. If you have app recommendations please let me know!</p>

        <h2>Tuners</h2>

        <div className="app-card">
          <div className="app-icon">
            <Image src="/images/guitar-tuna-guitar-lessons-austin-texas.png" width={80} height={80} alt="GuitarTuna" />
          </div>
          <div className="app-info">
            <h3><a href="https://apps.apple.com/us/app/guitartuna-guitar-bass-tuner/id527588389" target="_blank" rel="noopener noreferrer">GuitarTuna</a></h3>
            <p>Great tuner for beginners with an easy to read visualization and helpful tips like "too high" or "too low". The free version works great for standard tunings.</p>
          </div>
        </div>

        <div className="app-card">
          <div className="app-icon">
            <Image src="/images/Cleartune-guitar-lessons-austin-texas.png" width={80} height={80} alt="Cleartune" />
          </div>
          <div className="app-info">
            <h3><a href="https://apps.apple.com/us/app/cleartune/id286799607" target="_blank" rel="noopener noreferrer">Cleartune</a></h3>
            <p>My go-to tuner. Super accurate even to my picky ear that is used to strobe tuners. $3.99 on the App Store but totally worth it!</p>
          </div>
        </div>

        <h2>Metronomes</h2>

        <div className="app-card">
          <div className="app-icon">
            <Image src="/images/tempo-advance-guitar-lessons-austin-texas.png" width={80} height={80} alt="Tempo Advance" />
          </div>
          <div className="app-info">
            <h3><a href="http://www.frozenape.com/tempoadvance-metronome.html" target="_blank" rel="noopener noreferrer">Tempo Advance</a></h3>
            <p>By far my favorite metronome app. Create setlists, use polyrhythm mode to practice complex rhythms, and enjoy an intuitive interface. $3.99 on the App Store.</p>
          </div>
        </div>

        <div className="app-card">
          <div className="app-icon">
            <Image src="/images/time-guru-guitar-lessons-austin-texas.png" width={80} height={80} alt="Time Guru" />
          </div>
          <div className="app-info">
            <h3><a href="https://apps.apple.com/us/app/time-guru-metronome/id421929034" target="_blank" rel="noopener noreferrer">Time Guru</a></h3>
            <p>This metronome has a random mute feature which is amazing for strengthening your internal clock. $1.99 on the App Store.</p>
          </div>
        </div>

        <h2>Apps for Reading and Practicing Music</h2>

        <div className="app-card">
          <div className="app-icon">
            <Image src="/images/iReal-pro-guitar-lessons-austin-texas.png" width={80} height={80} alt="iReal Pro" />
          </div>
          <div className="app-info">
            <h3><a href="https://irealpro.com" target="_blank" rel="noopener noreferrer">iReal Pro</a></h3>
            <p>A great app for chord charts with extremely powerful play-along capabilities. Find songs from tons of styles in the user-submitted forums. Make your own chord charts with play-alongs in many styles. Transposition is super easy. $13.99 on iPhone, iPad, and Android, $19.99 for Mac.</p>
          </div>
        </div>

        <div className="app-card">
          <div className="app-icon">
            <Image src="/images/forscore-guitar-lessons-austin-texas.png" width={80} height={80} alt="forScore" />
          </div>
          <div className="app-info">
            <h3><a href="https://forscore.co" target="_blank" rel="noopener noreferrer">forScore</a></h3>
            <p>My absolute favorite glorified PDF reader. Use it to organize all of your sheet music on iPad. Makes organizing setlists super easy as well as editing via tablet. $14.99 on the App Store.</p>
          </div>
        </div>

        <h2>Coming soon...</h2>
        <ul>
          <li>Backing tracks</li>
          <li>Book recommendations</li>
          <li>Guitar gear for beginners</li>
        </ul>
      </AppsForMusiciansStyled>
    </Layout>
  );
};

export default AppsForMusicians;

const AppsForMusiciansStyled = styled.div`
  max-width: 800px;
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
    margin-bottom: 1rem;
  }

  > p {
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
  }

  .app-card {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
    background: #f9f9f9;
    border-radius: 8px;

    .app-icon {
      flex-shrink: 0;
    }

    .app-info {
      h3 {
        margin: 0 0 0.5rem 0;

        a {
          color: #0066cc;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      p {
        margin: 0;
        color: #444;
      }
    }
  }

  > ul {
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;
