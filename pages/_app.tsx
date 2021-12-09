import { AppProps } from "next/app";

import "../utils/styles/global.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
