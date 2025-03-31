import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home.jsx';
import Rules from './pages/Rules.jsx';
import SampleDecks from './pages/SampleDecks.jsx';
import Catalog from './pages/Catalog.jsx';
import CardDetails from './pages/CardDetails.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/sampledecks" element={<SampleDecks />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/carddetails" element={<CardDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);