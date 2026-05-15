import { Box, Typography } from "@mui/material";

export default function ProjectCard({ item }) {
  return (
    <Box
      className="project-card"
      sx={{
        position: "relative",

        width: {
          xs: "320px",
          md: "500px",
        },

        height: {
          xs: "200px",
          md: "300px",
        },

        borderRadius: "24px",

        overflow: "hidden",

        flexShrink: 0,

        border: "1px solid rgba(255,255,255,0.08)",

        transition: "all 0.4s ease",

        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",

          border:
            "1px solid rgba(207,16,32,0.4)",

          boxShadow:
            "0 25px 80px rgba(207,16,32,0.25)",
        },
      }}
    >
      {/* WEBSITE IMAGE */}
      <Box
        component="img"
        src={item.image}
        alt={item.label}
        sx={{
          width: "100%",
          height: "100%",

          objectFit: "cover",

          transition: "transform 0.6s ease",

          ".project-card:hover &": {
            transform: "scale(1.05)",
          },
        }}
      />

      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",

          inset: 0,

          background:
            "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.1), transparent)",
        }}
      />

      {/* PROJECT NAME */}
      <Box
        sx={{
          position: "absolute",

          bottom: 0,
          left: 0,
          right: 0,

          p: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#fff",

            fontWeight: 700,

            letterSpacing: "0.5px",
          }}
        >
          {item.label}
        </Typography>
      </Box>
    </Box>
  );
}