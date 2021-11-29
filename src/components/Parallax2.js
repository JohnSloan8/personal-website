import { jarallax, jarallaxVideo } from "jarallax";
import "jarallax/dist/jarallax.css";
import { useEffect } from "react";

// import "./styles.css";

export default function Parallax2() {
  useEffect(() => {
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax2"), {
      speed: 0.2,
      videoSrc: "https://www.youtube.com/watch?v=6boGtBCbclc",
    });
  });
  return <div className="jarallax2 jarallax-container" />;
}
