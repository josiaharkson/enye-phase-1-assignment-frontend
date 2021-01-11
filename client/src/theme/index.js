import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app - Material UI Based
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#115293",
      // main: "#3b88c3",
      // main: "#8a2be2",
    },
    secondary: {
      main: "#ea9b54",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
// main: "#19857b",
