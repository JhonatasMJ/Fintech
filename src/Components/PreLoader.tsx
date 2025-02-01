import { useState, useEffect } from "react";
import logo from '../Assets/fintech.svg'


export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader-container ${loaded ? "loaded" : ""}`}>
      <div className="preloader">
        <img src={logo} alt="Logo" className="logo" />
      </div>

    </div>
  );
}
