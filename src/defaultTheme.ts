// ********************************

/**
 *
 *  light: comes from the mock
 *  mid: is 20% darker than light
 *  main: comes from the mock
 *  dark: comes from the mock
 *  contrast: comes from the mock
 */

const defaultTheme = {
  palette: {
    primary: {
      light: "#6668D0",
      mid: "#33359D",
      main: "#303F9F",
      dark: "#00186F",
      contrast: "#FFFFFF",
    },
    secondary: {
      light: "#FFFFFF",
      mid: "#CC8E2B",
      main: "#E8902E",
      dark: "#B16200",
      contrast: "#000000",
    },
    tertiary: {
      light: "#5BB4FC",
      mid: "#2881C9",
      main: "#0085C9",
      dark: "#005998",
      contrast: "#000000",
    },
    gray: {
      light: "#E6E6E6",
      mid: "#CDCDCD",
      main: "#CCCCCC",
      dark: "#B3B3B3",
      contrast: "#000000",
    },
  },
  typography: {
    fonts: {
      headings:
        "PT Sans" /**A font more suited, but not exclusive for heading text*/,
      body:
        "Open Sans" /**A font more suited, but not exclusive for body text */,
    },
    fontWeight: {
      light: 300 as 300,
      regular: 400 as 400,
      medium: 500 as 500,
      bold: 700 as 700,
    },
  },
};

export default defaultTheme;
