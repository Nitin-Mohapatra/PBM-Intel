import { Box, Typography } from "@mui/material";
import Logo from "../components/Logo";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop:
          "1px solid rgba(255,255,255,0.06)",

        py: 1,

        px: {
          xs: 3,
          md: 6,
        },

        display: "flex",

        alignItems: "center",

        justifyContent: "space-between",

        flexWrap: "wrap",

        gap: 3,
      }}
    >
      {/* LOGO */}
      <Logo/>

      {/* COPYRIGHT */}
      <Typography
      variant="h3"
        sx={{
          color:
            "#cf1020",

          fontSize: "13px",

          textAlign: "center",
        }}
      >
        Do The Undone .
      </Typography>

      {/* LINKS */}
      {/* <Box
        sx={{
          display: "flex",

          alignItems: "center",

          gap: 4,
        }}
      >
        {["Privacy", "Terms", "Contact"].map(
          (label) => (
            <Typography
              key={label}
              sx={{
                color:
                  "rgba(255,255,255,0.6)",

                fontSize: "13px",

                cursor: "pointer",

                transition:
                  "all 0.3s ease",

                "&:hover": {
                  color: "#cf1020",
                },
              }}
            >
              {label}
            </Typography>
          )
        )}
      </Box> */}
    </Box>
  );
}