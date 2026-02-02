import { AppProps } from "next/app";
import { useRouter } from "next/router";
import styled from "styled-components";

import "../utils/styles/global.scss";
import { CourseNavigationProvider, useCourseNavigation } from "../context";
import Menu from "../components/courses/Menu";
import { theme } from "../utils/styles/theme";

const PersistentMenu = () => {
  const router = useRouter();
  const courseNav = useCourseNavigation();

  // Show menu on course lesson pages (not the /courses index)
  const isCourseRoute =
    router.pathname.startsWith("/courses/") &&
    router.pathname.split("/").length > 2;
  const showMenu = isCourseRoute && courseNav?.course;

  if (!showMenu) return null;

  return (
    <PersistentMenuWrapper>
      <Menu />
    </PersistentMenuWrapper>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CourseNavigationProvider>
      <PersistentMenu />
      <Component {...pageProps} />
    </CourseNavigationProvider>
  );
};

export default App;

const PersistentMenuWrapper = styled.div`
  position: fixed;
  top: 135px;
  left: 0;
  width: ${theme.sizes.sidebarWidth};
  height: calc(100vh - 135px);
  z-index: 100;
`;
