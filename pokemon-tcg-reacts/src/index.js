import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import Home from './pages/Home.jsx';
import Rules from './pages/Rules.jsx';
import SampleDecks from './pages/SampleDecks.jsx';
import Catalog from './pages/Catalog.jsx';
import CardDetails from './pages/CardDetails.jsx';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/sampledecks" element={<SampleDecks />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/carddetails/:cardId" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);