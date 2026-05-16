import { Box, Typography, Button } from "@mui/material";
import { Icons } from "./Icons";

export default function CTASection({ openCalendar }) {
  return (
    <Box
      sx={{
        py: 5,

        px: {
          xs: 3,
          md: 6,
        },

        position: "relative",

        overflow: "hidden",
      }}
    >
      {/* BACKGROUND GLOW */}
      <Box
        sx={{
          position: "absolute",

          top: "50%",
          left: "50%",

          transform: "translate(-50%, -50%)",

          width: "700px",
          height: "400px",

          background:
            "radial-gradient(ellipse, rgba(207,16,32,0.12) 0%, transparent 70%)",

          filter: "blur(60px)",

          pointerEvents: "none",
        }}
      />

      {/* TOP BORDER */}
      <Box
        sx={{
          position: "absolute",

          top: 0,
          left: "10%",
          right: "10%",

          height: "1px",

          background:
            "linear-gradient(90deg, transparent, rgba(207,16,32,0.3), transparent)",
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          // maxWidth: "900px",

          mx: "auto",

          textAlign: "center",

          position: "relative",

          zIndex: 2,
        }}
      >
        {/* ICON BOX */}
        <Box
        // sx={{
        //   width: "70px",
        //   height: "70px",

        //   borderRadius: "20px",

        //   border:
        //     "1px solid rgba(207,16,32,0.3)",

        //   background:
        //     "rgba(207,16,32,0.08)",

        //   display: "flex",

        //   alignItems: "center",

        //   justifyContent: "center",

        //   mx: "auto",

        //   mb: 5,

        //   animation:
        //     "glowPulse 3s ease-in-out infinite",
        // }}
        >
          <Typography variant="h2" sx={{ color: "#cf1020", py: 5 }}>
            Let's Do The {" "}
            <Box
              component="span"
              sx={{
                color: "#fff",
              }}
            >
              Undone .
            </Box>
          </Typography>
        </Box>

        {/* HEADING */}
        {/* <Typography
          variant="h2"
          sx={{
            color: "#fff",

            mb: 3,

            lineHeight: 1,
          }}
        >
          Let’s build something{" "}
          <Box
            component="span"
            sx={{
              color: "#cf1020",
            }}
          >
            amazing
          </Box>{" "}
          together.
        </Typography> */}

        {/* DESCRIPTION */}
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.7)",
            mx: "auto",
            mb: 6,
            // lineHeight: 1.8,
          }}
        >
          Ready to transform your idea into a
          high-performance digital product?
          Let’s create something exceptional
          together.
        </Typography>

        {/* BUTTON */}
        <Button
          onClick={openCalendar}
          variant="contained"
          sx={{
            px: {
              xs: 0,
              sm: 5,
            },

            py: {
              xs: 0,
              sm: 2,
            },
          }}
        >
          Schedule a Meeting

          <Icons.ArrowRight />
        </Button>

        {/* FOOT TEXT */}
        <Typography
          variant="body1"
          sx={{
            mt: 3,

            color:
              "rgba(255,255,255,0.32)",
          }}
        >
          Free consultation • No commitment
          required
        </Typography>
      </Box>
    </Box>
  );
}