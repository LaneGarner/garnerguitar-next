interface NeutralsInterface {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
  15: string;
}

interface ShadowInterface {
  light: string;
  primary: string;
  dark: string;
}

interface CardInterface {
  dark: string;
  darker: string;
}

interface UtilsInterface {
  shadows: ShadowInterface;
  cards: CardInterface;
}

interface ColorsInterface {
  green: string;
  gold: string;
  navy: string;
  neutral: NeutralsInterface;
}

interface SizesInterface {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  header: string;
  headerSmall: string;
  headerMobile: string;
  sidebarWidth: string;
}

interface BreakpointsInterface {
  sm: string;
  md: string;
  lg: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsInterface;
    fonts: string[];
    sizes: SizesInterface;
    breakpoints: BreakpointsInterface;
  }
}

interface ThemeInterface {
  colors: ColorsInterface;
  fonts: string[];
  sizes: SizesInterface;
  breakpoints: BreakpointsInterface;
  utils: UtilsInterface;
}

export const theme: ThemeInterface = {
  colors: {
    green: "#83e7cb",
    gold: "#e3c24d",
    navy: "#001f3f",
    neutral: {
      0: "#000",
      1: "#111",
      2: "#222",
      3: "#333",
      4: "#444",
      5: "#555",
      6: "#666",
      7: "#777",
      8: "#888",
      9: "#999",
      10: "#aaa",
      11: "#bbb",
      12: "#ccc",
      13: "#ddd",
      14: "#eee",
      15: "#fff",
    },
  },
  fonts: ["sans-serif", "Roboto"],
  sizes: {
    xxs: "0.25em",
    xs: "0.5em",
    s: "1em",
    m: "2em",
    l: "3em",
    xl: "4em",
    xxl: "5em",
    header: "150px",
    headerSmall: "100px",
    headerMobile: "135px",
    sidebarWidth: "280px",
  },
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "900px",
  },
  utils: {
    shadows: {
      light: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
      primary: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
      dark: "0px 8px 16px 0px rgba(0, 0, 0, 0.35)",
    },
    cards: {
      dark: `
        background-color: #333;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.35);
        color: #ddd;
      `,
      darker: `
        background-color: #262626;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.35);
        color: #ddd;
      `,
    },
  },
};
