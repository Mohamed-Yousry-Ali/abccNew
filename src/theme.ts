// theme.ts or theme.js
import { extendTheme } from "@chakra-ui/react";

// Extend the theme
const theme = extendTheme({
  fonts: {
    heading: "Cairo, sans-serif", // Font for headings
    body: "Cairo, sans-serif", // Font for body text
  },
});

export default theme;
