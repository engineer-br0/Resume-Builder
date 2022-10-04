import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Favicon from "react-favicon";
import fav from './images/check.png'
import './index.css';
import Nav from "./components/Nav";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>

      <Favicon url={fav} />
      {/* <BrowserRouter>
     <Routes>
     <Route path="/" element={<Nav />} />
    </Routes>
    </BrowserRouter> */}
      <App />
    
    </div>
);

























