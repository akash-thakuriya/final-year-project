import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/custom/Hero'

function loadGoogleMaps(apiKey) {
  if (window.google && window.google.maps) return;
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
  script.async = true;
  document.body.appendChild(script);
}

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    loadGoogleMaps(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
  }, []);

  return (
    <>
      {/* Hero */}
      <Hero/>
    </>
  )
}

export default App