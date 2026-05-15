const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #000; font-family: 'DM Sans', sans-serif; color: #fff; overflow-x: hidden; }
  #root { width: 100%; max-width: none; margin: 0; text-align: initial; border-inline: 0; min-height: 100vh; display: block; }

  ::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #050505;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(
    180deg,
    #cf1020,
    #ff5a36
  );

  border-radius: 20px;

  border: 2px solid #050505;

  box-shadow:
    0 0 10px rgba(207,16,32,0.5),
    0 0 20px rgba(207,16,32,0.3);

  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    180deg,
    #ff3045,
    #ff7b54
  );

  box-shadow:
    0 0 15px rgba(255,90,54,0.7),
    0 0 30px rgba(255,90,54,0.5);
}

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes scrollLeft {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  @keyframes scrollRight {
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
  }
  @keyframes gridMove {
    from { background-position: 0 0; }
    to { background-position: 60px 60px; }
  }
  @keyframes blobFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.05); }
    66% { transform: translate(-20px, 20px) scale(0.95); }
  }
  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(207,16,32,0.4), 0 0 60px rgba(207,16,32,0.2); }
    50% { box-shadow: 0 0 40px rgba(207,16,32,0.7), 0 0 100px rgba(207,16,32,0.4); }
  }
  @keyframes navSlide {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes lineWidth {
    from { width: 0; }
    to { width: 60px; }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .hero-animate { animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .hero-animate-delay1 { animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
  .hero-animate-delay2 { animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards; opacity: 0; }
  .hero-animate-delay3 { animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards; opacity: 0; }

  .service-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    padding: 36px 28px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: default;
    position: relative;
    overflow: hidden;
  }
  .service-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(135deg, rgba(207,16,32,0.06) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 20px;
  }
  .service-card:hover {
    border-color: rgba(207,16,32,0.4);
    transform: translateY(-8px);
    background: rgba(207,16,32,0.05);
    box-shadow: 0 20px 60px rgba(207,16,32,0.15), 0 0 0 1px rgba(207,16,32,0.2);
  }
  .service-card:hover::before { opacity: 1; }

  .project-card {
    flex-shrink: 0;
    width: 340px;
    height: 220px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease;
    border: 1px solid rgba(255,255,255,0.08);
  }
  .project-card:hover { transform: scale(1.04); box-shadow: 0 20px 60px rgba(207,16,32,0.2); }
  .project-card img { width: 100%; height: 100%; object-fit: cover; }

  .btn-primary {
    background: linear-gradient(135deg, #cf1020, #e8152a);
    color: white;
    border: none;
    padding: 16px 36px;
    border-radius: 50px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.3px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .btn-primary::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 0; height: 0;
    background: rgba(255,255,255,0.15);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(207,16,32,0.5); }
  .btn-primary:hover::after { width: 300px; height: 300px; }

  .btn-outline {
    background: transparent;
    color: white;
    border: 1px solid rgba(255,255,255,0.25);
    padding: 16px 36px;
    border-radius: 50px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }
  .btn-outline:hover { border-color: rgba(207,16,32,0.6); color: #cf1020; transform: translateY(-2px); }

  .nav-link {
    color: rgba(255,255,255,0.65);
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.3px;
    transition: color 0.25s ease;
    cursor: pointer;
  }
  .nav-link:hover { color: #cf1020; }

  .carousel-wrapper { overflow: hidden; }
  .carousel-track { display: flex; gap: 24px; width: max-content; }
  .carousel-track.left { animation: scrollLeft 30s linear infinite; }
  .carousel-track.right { animation: scrollRight 30s linear infinite; }
  .carousel-track:hover { animation-play-state: paused; }

  .section-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(207,16,32,0.1);
    border: 1px solid rgba(207,16,32,0.2);
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #cf1020;
    margin-bottom: 24px;
  }

  .icon-wrap {
    width: 52px; height: 52px;
    background: rgba(207,16,32,0.1);
    border: 1px solid rgba(207,16,32,0.2);
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 24px;
    transition: all 0.3s ease;
  }
  .service-card:hover .icon-wrap {
    background: rgba(207,16,32,0.2);
    border-color: rgba(207,16,32,0.4);
  }

  @media (max-width: 768px) {
    .hero-title { font-size: 38px !important; line-height: 1.15 !important; }
    .hero-btns { flex-direction: column; }
    .hero-btns button { width: 100%; }
    .services-grid { grid-template-columns: 1fr !important; }
    .nav-links { display: none; }
    .project-card { width: 260px; height: 170px; }
  }
  @media (max-width: 480px) {
    .hero-title { font-size: 30px !important; }
  }
`;

export function injectGlobalStyles() {
  const styleId = "paperball-global-styles";

  if (document.getElementById(styleId)) {
    return;
  }

  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = globalStyles;
  document.head.appendChild(style);
}
