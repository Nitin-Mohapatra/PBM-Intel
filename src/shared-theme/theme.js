import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();
const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#cf1020",
    },

    background: {
      default: "#000000",
      paper: "#111111",
    },

    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.7)",
    },
  },

  typography: {
    fontFamily: "Jones, sans-serif",

    h1: {
      fontFamily: "Akira, sans-serif",
      fontWeight: 800,
      fontSize: defaultTheme.typography.pxToRem(60),
      lineHeight: 1,
      letterSpacing: "-4px",
      color: "#cf1020",

      [defaultTheme.breakpoints.down("md")]: {
        fontSize: defaultTheme.typography.pxToRem(45),
        letterSpacing: "-2px",
      },

      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: defaultTheme.typography.pxToRem(20),
        letterSpacing: "-1px",
      },

      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: defaultTheme.typography.pxToRem(20),
      },
    },
    h2: {
      fontFamily: "Akira, sans-serif",
      fontSize: defaultTheme.typography.pxToRem(60),
      lineHeight: 1,
      letterSpacing: "-4px",
      fontWeight: 700,

      [defaultTheme.breakpoints.down("md")]: {
        fontSize: defaultTheme.typography.pxToRem(45),
        letterSpacing: "-2px",
      },

      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: defaultTheme.typography.pxToRem(20),
        letterSpacing: "-1px",
      },

      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: defaultTheme.typography.pxToRem(20),
      },
    },

    h3: {
      fontFamily: "Akira, sans-serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Akira, sans-serif",
      fontSize: "2em",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Akira, sans-serif",
    },
    body1: {
      fontFamily: "Jones, sans-serif",
      fontSize: "1rem",
      // lineHeight: 1.1,
      fontWeight: "800"
    },

    body2: {
      fontFamily: "Jones, sans-serif",
    },

    button: {
      fontFamily: "Jones, sans-serif",
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "5px",

          fontFamily: "Akira, sans-serif",
          fontWeight: 800,

          textTransform: "none",

          boxShadow: "none",

          transition: "all 0.3s ease",

          // tablet and above
          [theme.breakpoints.up("sm")]: {
            padding: "12px 28px",
          },
        }),

        contained: {
          background: "#f85b32",
          color: "#fff",

          "&:hover": {
            background: "#a1bf77",
            transform: "translateY(-2px)",
            // boxShadow: "0 10px 30px rgba(207,16,32,0.35)",
          },
        },

        outlined: {
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",

          "&:hover": {
            borderColor: "#cf1020",
            background: "rgba(207,16,32,0.08)",
          },
        },
      },
    },
  },
});

export default theme;