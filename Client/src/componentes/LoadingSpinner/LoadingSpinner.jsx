import React, { useState, useEffect } from "react";
import loadingImage from '../../assets/jackal-running.gif'
import './Loading.css'

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-spinner ${isLoading ? 'active' : ''}`}>
      <img src={loadingImage} alt="Loading" />
    </div>
  )
}
