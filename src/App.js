import React from 'react';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/Style.css';
import Router from "./router/Router";
import './interceptor/Interceptor';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
          <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
