import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo.png';
import sign from '../assets/sign.png';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [language, setLanguage] = useState('en'); // Default language is English
  const [dropdownOpen, setDropdownOpen] = useState(false); //remember same like i did in javafx 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false); 
  };

  const texts = {
    en: {
      home: 'Home',
      about: 'About Us',
      contact: 'Contact',
      exam: 'Examination Test',
      signIn: 'Sign In',
      selectLanguage: 'Select Language'
    },
    fr: {
      home: 'Accueil',
      about: 'À propos de nous',
      contact: 'Contact',
      exam: 'Test d\'examen',
      signIn: 'Se connecter',
      selectLanguage: 'Choisir la langue'
    },
    ar: {
      home: 'الرئيسية',
      about: 'معلومات عنا',
      contact: 'اتصل',
      exam: 'اختبار الفحص',
      signIn: 'تسجيل الدخول',
      selectLanguage: 'اختر اللغة'
    },
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logo} alt="Starfire Logo" className="logo-image" />
          <h1>Starfire</h1>
        </div>
        <ul className="navbar-links">
          <li>
            <a
              href="#home"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => setActiveLink('home')}
            >
              {texts[language].home}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => setActiveLink('about')}
            >
              {texts[language].about}
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => setActiveLink('contact')}
            >
              {texts[language].contact}
            </a>
          </li>
          <li>
            <Link
              to="/quiz"
              className={activeLink === 'exam' ? 'active' : ''}
              onClick={() => setActiveLink('exam')}
            >
              {texts[language].exam}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-signin">
        <a href="#signin" className="signin-btn">
          <img src={sign} alt="Thumbnail" className="signin-sign" />
          {texts[language].signIn}
        </a>
        {/* Move the language toggle button here */}
        <div className="language-toggle">
          <button onClick={() => setDropdownOpen(!dropdownOpen)}>
            {texts[language].selectLanguage}
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => handleLanguageChange('en')}>English</button>
              <button onClick={() => handleLanguageChange('fr')}>Français</button>
              <button onClick={() => handleLanguageChange('ar')}>العربية</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
