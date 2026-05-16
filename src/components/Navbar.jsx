import Logo from "./Logo";
import { Button } from "@mui/material";

export default function Navbar({ openCalendar }) {
  return (
    <nav
      className="navbar navbar-dark sticky-top"
      style={{
        background: "#000",
        // padding: "20px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        <Logo/>

        {/* BUTTON */}
        <Button
        variant="contained"
        onClick={openCalendar}
          sx={{
            borderRadius: "10px",
            border: "none",
            fontWeight: "600",
            backgroundColor: "#f85b32",
            color: "white",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#a1bf77",
            },
          }}
        >
          Book A Call
        </Button>
      </div>
    </nav>
  );
}