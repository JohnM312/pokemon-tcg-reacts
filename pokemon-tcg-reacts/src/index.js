import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './pages/Home.jsx';
import Rules from './pages/Rules.jsx';
import SampleDecks from './pages/SampleDecks.jsx';
import Catalog from './pages/Catalog.jsx';
import CardDetails from './pages/CardDetails.jsx';
import Contact from './pages/Contact.jsx';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <main> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/sampledecks" element={<SampleDecks />} />
          <Route path="/catalog" element={<Catalog />} />
          {/* Ensure CardDetails route path matches links if needed */}
          <Route path="/carddetails" element={<CardDetails />} />
          <Route path="/carddetails/:cardId" element={<CardDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);