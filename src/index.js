import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from "./RouteSwitch";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
        <h1><a href="/">Apple Store</a></h1>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="news">News</a></li>
      </ul>
    </header>
    <RouteSwitch />
  </React.StrictMode>
);

