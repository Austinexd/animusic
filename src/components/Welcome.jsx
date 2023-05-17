import { useRef } from "react";

function Welcome({ musicRef }) {
  const welcomeRef = useRef();
  const playBG = () => {
    const body = document.querySelector("body");
    body.style.overflowY = "scroll";
    welcomeRef.current.style.transition = "2s";
    welcomeRef.current.style.opacity = "0";

    setTimeout(function () {
      welcomeRef.current.style.display = "none";
    }, 2000);
    musicRef.current.play();
  };

  return (
    <div ref={welcomeRef} className="welcome">
      <audio
        ref={musicRef}
        id="backgroundmusic"
        controls={true}
        loop={true}
        hidden={true}
      >
        <source src="./music/ani music.mp3" type="audio/mpeg" />
      </audio>
      <div onClick={playBG}>Welcome!</div>
    </div>
  );
}

export default Welcome;
