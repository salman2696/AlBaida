import { StrictMode } from 'react'
import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './i18n'; // Import the i18n configuration


const Root = () => {
  useEffect(() => {
    // Force light theme by setting the data-theme attribute
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
