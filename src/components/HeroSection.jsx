import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes moveGrid {
            from {
              transform: translateY(0px);
            }

            to {
              transform: translateY(60px);
            }
          }

          @keyframes pulseGlow {
            0% {
              opacity: 0.6;
            }

            50% {
              opacity: 1;
            }

            100% {
              opacity: 0.6;
            }
          }
        `}
      </style>

      <Box
        sx={{
          minHeight: "100vh",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          position: "relative",
          overflow: "hidden",

          px: 3,

          background: "transparent",
        }}
      >
        {/* GRID BACKGROUND */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,

            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,

            backgroundSize: "60px 60px",

            opacity: 0.8,

            animation: "moveGrid 3s linear infinite",
          }}
        />

        {/* RED PARALLAX GLOW */}
        {/* <Box
          sx={{
            position: "absolute",

            top: "10%",
            left: "10%",

            width: "500px",
            height: "500px",

            background:
              "radial-gradient(circle, rgba(207,16,32,0.45) 0%, transparent 70%)",

            filter: "blur(70px)",

            transform: `translateY(${offsetY * 0.4}px)`,

            transition: "transform 0.1s linear",
          }}
        /> */}

        {/* BLUE PARALLAX GLOW */}
        {/* <Box
          sx={{
            position: "absolute",

            bottom: "0%",
            right: "5%",

            width: "400px",
            height: "400px",

            background:
              "radial-gradient(circle, rgba(0,140,255,0.35) 0%, transparent 70%)",

            filter: "blur(70px)",

            transform: `translateY(${offsetY * -0.15}px)`,

            transition: "transform 0.1s linear",
          }}
        /> */}

        {/* CENTER GLOW */}
        <Box
          sx={{
            position: "absolute",

            top: "50%",
            left: "50%",

            transform: "translate(-50%, -50%)",

            width: "300px",
            height: "300px",

            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",

            filter: "blur(80px)",

            animation: "pulseGlow 5s ease-in-out infinite",
          }}
        />

        {/* NOISE OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,

            opacity: 0.03,

            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        {/* CONTENT */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            mx:3,
            width: "100%",
           

            mx: "auto",

            textAlign: "center",

            transform: `translateY(${offsetY * 0.05}px)`,

            transition: "transform 0.1s linear",
          }}
        >
          {/* HERO HEADING */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,

              lineHeight: 0.95,

              letterSpacing: "-4px",

              
              mx: "auto",

              color: "#fff",

            }}
          >
            Powering businesses
            <br />
            through{" "}
            <Box
              component="span"
              sx={{
                color: "#cf1020",
              }}
            >
              technology
            </Box>
          </Typography>

          {/* PARAGRAPH */}
          <Typography
            variant="body1"
            sx={{
              mt: 4,

              mb: 6,

              maxWidth: "800px",

              mx: "auto",

              color: "rgba(255,255,255,0.7)",

              // fontSize: {
              //   xs: "16px",
              //   md: "20px",
              // },

              // lineHeight: 1.8,
            }}
          >
            We build high-performance websites, software,
            and digital products that help brands scale
            faster and stand out in the modern digital world.
          </Typography>

          {/* BUTTONS */}
          <Box
            sx={{
              display: "flex",

              justifyContent: "center",

              gap: 2,

              flexWrap: "wrap",
            }}
          >
            <Button variant="contained">
              Get Started
            </Button>

            <Button variant="outlined">
              View Work
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}