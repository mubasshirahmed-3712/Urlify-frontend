import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { logoutCall } from '../../apiCalls';
import { Menu, X } from 'lucide-react';
import './header.css';

export default function Header() {
  const { user, dispatch } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleLogout = () => {
    logoutCall(dispatch);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll behavior
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(lastScroll > currentScroll || currentScroll < 10);
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbarContainer ${visible ? 'show' : 'hide'}`}>
      <div className="navbarContent">
        {/* Logo */}
        <Link to="/" className="navbarLogo">
          <span className="logoHighlight">&lt;URL</span>ify/<span>&gt;</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links */}
        <nav className={`navbarLinks ${menuOpen ? 'open' : ''}`}>
          <Link to="#search-url" className="navLink">Search</Link>
          <Link to="#your-urls" className="navLink">Explore</Link>
          {user ? (
            <div className="navProfile">
              <span className="username">{user.username}</span>
              <span className="navLink logout" onClick={handleLogout}>Sign out</span>
            </div>
          ) : (
            <Link to="/login" className="navLink">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
