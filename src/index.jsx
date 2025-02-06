import React from 'react';
import ReactDOM from 'react-dom/client';

// Стили
import './normalize.css';

// Компоненты
import { App } from './Pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
