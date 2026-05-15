import { Box, Typography } from "@mui/material";

import { projectImages } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const doubled = [...projectImages, ...projectImages];

  return (
    <Box
      sx={{
        py: 5,

        position: "relative",

        overflow: "hidden",
      }}
    >
      {/* TOP LINE */}
      <Box
        sx={{
          position: "absolute",

          top: 0,
          left: 0,
          right: 0,

          height: "1px",

          background:
            "linear-gradient(90deg, transparent, rgba(207,16,32,0.4), transparent)",
        }}
      />

      {/* HEADER */}
      <Box
        sx={{
          textAlign: "center",

          mb: "80px",

          px: {
            xs: 3,
            md: 6,
          },
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
              color: "#white",

              fontSize: "12px",

              // fontWeight: 600,

              // letterSpacing: "2px",

              textTransform: "uppercase",
            }}
          >
            Portfolio
          </Typography>
        </Box>

        {/* HEADING */}
        <Typography
          variant="h2"
          sx={{
            color: "#fff",

            mb: 2,

            lineHeight: 1,
          }}
        >
          Our{" "}
          <Box
            component="span"
            sx={{
              color: "#cf1020",
            }}
          >
            Projects
          </Box>
        </Typography>

        {/* PARAGRAPH */}
        <Typography
          variant="body1"
          sx={{
           

            mx: "auto",

            color: "rgba(255,255,255,0.7)",

           
          }}
        >
          A showcase of modern digital products
          crafted with precision, performance,
          and premium user experience.
        </Typography>
      </Box>

      {/* FIRST CAROUSEL */}
      <Box
        className="carousel-wrapper"
        sx={{
          mb: 3,

          py: 1,
        }}
      >
        <Box className="carousel-track left">
          {doubled.map((item, index) => (
            <ProjectCard
              key={index}
              item={item}
            />
          ))}
        </Box>
      </Box>

      {/* SECOND CAROUSEL */}
      <Box
        className="carousel-wrapper"
        sx={{
          py: 1,
        }}
      >
        <Box className="carousel-track right">
          {[...doubled]
            .reverse()
            .map((item, index) => (
              <ProjectCard
                key={index}
                item={item}
              />
            ))}
        </Box>
      </Box>

      {/* LEFT FADE */}
      <Box
        sx={{
          position: "absolute",

          top: 0,
          left: 0,
          bottom: 0,

          width: "200px",

          background:
            "linear-gradient(to right, #000, transparent)",

          pointerEvents: "none",
        }}
      />

      {/* RIGHT FADE */}
      <Box
        sx={{
          position: "absolute",

          top: 0,
          right: 0,
          bottom: 0,

          width: "200px",

          background:
            "linear-gradient(to left, #000, transparent)",

          pointerEvents: "none",
        }}
      />
    </Box>
  );
}