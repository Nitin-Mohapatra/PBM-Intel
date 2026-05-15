import { Box, Typography } from "@mui/material";
import { services } from "../data/services";
import { Icons } from "./Icons";

export default function ServicesSection() {
  return (
    <Box
      sx={{
        py:5,
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

          width: "800px",
          height: "400px",

          background:
            "radial-gradient(ellipse, rgba(207,16,32,0.08) 0%, transparent 70%)",

          filter: "blur(60px)",

          pointerEvents: "none",
        }}
      />

      {/* MAIN CONTAINER */}
      <Box
        sx={{
          // maxWidth: "1400px",

          mx: "auto",

          position: "relative",

          zIndex: 2,
        }}
      >
        {/* SECTION HEADER */}
        <Box
          sx={{
            textAlign: "center",
            mx:3,
            mb: "80px",
          }}
        >
          {/* TAG */}
          <Box
            sx={{
              display: "inline-flex",

              alignItems: "center",

              gap: 1,

              px: 2,
              py: 1,

              borderRadius: "999px",

              border:
                "1px solid rgba(207,16,32,0.2)",

              background:
                "rgba(207,16,32,0.08)",

              mb: 3,
            }}
          >
            <Box
              sx={{
                width: "6px",
                height: "6px",

                borderRadius: "50%",

                background: "#cf1020",
              }}
            />

            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontSize: "12px",
                textTransform: "uppercase",
              }}
            >
              What We Do
            </Typography>
          </Box>

          {/* HEADING */}
          <Typography
            variant="h2"
            sx={{
              color: "#cf1020",
              mb: 2,
              lineHeight: 1,
            }}
          >
            Our Services
            {/* <Box
              component="span"
              sx={{
                color: "#cf1020",
              }}
            >
              Services
            </Box> */}
          </Typography>

          {/* PARAGRAPH */}
          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",

              mx: "auto",

              color: "rgba(255,255,255,0.7)",

              lineHeight: 1.8,
            }}
          >
            We offer a full spectrum of digital
            services to help brands build, scale,
            and grow through modern technology.
          </Typography>
        </Box>

        {/* SERVICES GRID */}
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "1fr 1fr 1fr",
            },

            gap: 3,
          }}
        >
          {services.map(({ icon, title, desc }) => {
            const IconComp = Icons[icon];

            return (
              <Box
                key={title}
                sx={{
                  p: 4,

                  borderRadius: "28px",

                  background:
                    "rgba(255,255,255,0.03)",

                  border:
                    "1px solid rgba(255,255,255,0.06)",

                  backdropFilter: "blur(20px)",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-8px)",

                    border:
                      "1px solid rgba(207,16,32,0.4)",

                    boxShadow:
                      "0 20px 60px rgba(207,16,32,0.15)",
                  },
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",

                    borderRadius: "18px",

                    background:
                      "rgba(207,16,32,0.08)",

                    border:
                      "1px solid rgba(207,16,32,0.2)",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    mb: 3,
                  }}
                >
                  <IconComp />
                </Box>

                {/* TITLE */}
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,

                    color: "#fff",

                    fontWeight: 700,
                  }}
                >
                  {title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  variant="body2"
                  sx={{
                    color:
                      "rgba(255,255,255,0.65)",

                    lineHeight: 1.8,
                  }}
                >
                  {desc}
                </Typography>

                {/* CTA */}
                <Box
                  sx={{
                    mt: 3,

                    display: "flex",

                    alignItems: "center",

                    gap: 1,

                    color: "#cf1020",

                    fontSize: "14px",

                    fontWeight: 600,

                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#cf1020",
                    }}
                  >
                    Learn More
                  </Typography>

                  <Icons.ArrowRight />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}