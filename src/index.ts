import themeCreator from "./themeCreator";
import defaultTheme from "./defaultTheme";

const { ThemeContext, ThemeProvider, useTheme, withTheme } = themeCreator(
  defaultTheme
);
export { ThemeContext, ThemeProvider, useTheme, withTheme, defaultTheme };
