import { useState, useEffect } from "react";
import logo from '../Assets/fintech.svg'


export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoaded(true), 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return (
    <div className={`preloader-container ${fadeOut ? "loaded" : ""}`}>
      <div className="preloader">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
}
