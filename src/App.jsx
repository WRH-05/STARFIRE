
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Footer from './pages/Footer';
import SurvivorStories from "./pages/SurvivorStories";
import Quiz from './pages/Quiz'; 
import Result from './pages/Result'; 

function App() {
  return (
    <LanguageProvider> {}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <div>
              <HomePage />
              <SurvivorStories />
              <AboutUs />
              <Footer />
            </div>
          } />
          <Route path="/quiz" element={<Quiz />} /> {}
          <Route path="/result" element={<Result />} /> {}
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
