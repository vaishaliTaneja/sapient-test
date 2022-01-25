import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductState } from "./context/state";

ReactDOM.render(
  <React.StrictMode>
    <ProductState>
      <App />
    </ProductState>
  </React.StrictMode>,
  document.getElementById('root')
);
