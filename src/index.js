import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
    { id: "todo-0", name: "Есть", completed: false },
    { id: "todo-1", name: "Спать", completed: false },
    { id: "todo-2", name: "Плясать", completed: false }
  ];

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<React.StrictMode>
<App tasks={DATA}/>
</React.StrictMode>
);
