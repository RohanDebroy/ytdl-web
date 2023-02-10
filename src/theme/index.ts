import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },
});

export default responsiveFontSizes(theme);
