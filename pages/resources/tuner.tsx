import Image from "next/image";
import Link from "next/link";
import { Layout } from "../../components";
import styled from "styled-components";

const Tuner = (): JSX.Element => {
  return (
    <Layout>
      <TunerStyled>
        <Link href="/resources">&larr; Back to Resources</Link>

        <h1>Tuner</h1>
        <p>Tuning the guitar is one of the most important things to do every time you play your instrument. With the advent of smart phone apps gone are the days of carrying around a physical tuner. For beginners I recommend the app GuitarTuna because of its easy to use interface. For advancing players I like Cleartune. While GuitarTuna isn't quite as accurate as Cleartune, it is typically easier to use for beginners.</p>

        <div className="app-section">
          <h2>GuitarTuna</h2>
          <Image src="/images/guitar-tuna.png" width={100} height={100} alt="GuitarTuna app icon" />
          <p>Great for beginners with an easy to read visualization and helpful tips like "too high" or "too low".</p>
          <ul>
            <li><a href="https://yousician.com/guitartuna" target="_blank" rel="noopener noreferrer">GuitarTuna on Browser</a></li>
            <li><a href="https://apps.apple.com/us/app/guitartuna-guitar-bass-tuner/id527588389" target="_blank" rel="noopener noreferrer">GuitarTuna on iOS</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.ovelin.guitartuna" target="_blank" rel="noopener noreferrer">GuitarTuna on Google Play</a></li>
          </ul>
        </div>

        <div className="app-section">
          <h2>Cleartune</h2>
          <Image src="/images/cleartune.png" width={100} height={100} alt="Cleartune app icon" />
          <p>My go-to tuner when tuning with my phone or iPad. Super accurate even to my picky ear that is used to strobe tuners. This app costs $3.99 on the App Store but is totally worth it.</p>
          <ul>
            <li><a href="https://apps.apple.com/us/app/cleartune/id286799607" target="_blank" rel="noopener noreferrer">Cleartune on iOS</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.bitcount.cleartune" target="_blank" rel="noopener noreferrer">Cleartune on Google Play</a></li>
          </ul>
        </div>

        <h2>Strobe tuners</h2>
        <p>I'm also a big fan of super accurate strobe style tuners that not only allow you to tune up but which can also be used to set intonation. When playing live I like to use either the TC Electronic Polytune Clip or a Sonic Research Turbo Tuner. These tuners are super useful for noisy environments where your phone microphone will struggle with background sounds.</p>

        <div className="app-section">
          <h3>Polytune Clip</h3>
          <Image src="/images/polytuneclip.jpg" width={200} height={200} alt="TC Electronic Polytune Clip" />
          <p><a href="https://amzn.to/2Tt2YzH" target="_blank" rel="noopener noreferrer">Polytune Clip on Amazon</a></p>
          <p><em>Note: By using this affiliate link you will support GarnerGuitar at no extra charge to you.</em></p>
        </div>

        <div className="app-section">
          <h3>Sonic Research Turbo Tuner</h3>
          <Image src="/images/turbo-tuner.jpg" width={200} height={150} alt="Sonic Research Turbo Tuner" />
          <p><a href="https://www.turbo-tuner.com" target="_blank" rel="noopener noreferrer">Sonic Research Turbo Tuner</a></p>
        </div>
      </TunerStyled>
    </Layout>
  );
};

export default Tuner;

const TunerStyled = styled.div`
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

  h2 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  .app-section {
    margin-bottom: 2rem;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 8px;

    h2, h3 {
      margin-top: 0;
    }

    ul {
      margin: 0.5rem 0;
      padding-left: 1.5rem;
    }

    li {
      margin-bottom: 0.25rem;
    }

    a {
      color: #0066cc;
    }
  }
`;
