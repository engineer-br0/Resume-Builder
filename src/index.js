import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import Favicon from "react-favicon";
import fav from './images/check.png'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
      <Favicon url={fav} />
      <App />
    </div>
);

























