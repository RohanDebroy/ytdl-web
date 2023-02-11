import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
        fontSize: "1.5rem",
      },
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(45deg, orange, purple)",
          backgroundClip: "text",
          textFillColor: "transparent",
          cursor: "pointer",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: ({
            theme: {
              palette: { background, getContrastText },
            },
          }) => ({
            background: `linear-gradient(${background.default}, ${background.default}) padding-box,linear-gradient(to right, red, purple) border-box`,
            borderRadius: "10px",
            border: "1px solid transparent",
            color: getContrastText(background.default),

            "&:hover": {
              background: `linear-gradient(to right, red, purple) border-box, linear-gradient(${background.default}, ${background.default}) padding-box`,
              borderColor: "black",
            },
          }),
        },
      ],
    },
  },
});

export default responsiveFontSizes(theme);
