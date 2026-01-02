import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();


  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <div className="app-container">

      <aside className="sidebar">
        <div className="sidebar-header">ThingsBoard</div>
        <nav className="sidebar-menu">
          <Link to="/" className={`menu-item ${isActive('/')}`}>
            <span className="menu-icon">🏠</span> Home
          </Link>
          <div className="menu-group-title" style={{padding: '10px 20px', color: '#aaa', fontSize: '12px'}}>ENTITIES</div>
          <Link to="/devices" className={`menu-item ${isActive('/devices')}`}>
            <span className="menu-icon">💻</span> Devices
          </Link>
          <Link to="/assets" className={`menu-item ${isActive('/assets')}`}>
            <span className="menu-icon">🏢</span> Assets
          </Link>
        </nav>
      </aside>

  
      <div className="main-content-wrapper">
        <header className="top-header">
          <div className="page-title">
        
             {location.pathname === '/' ? 'Home' : 
              location.pathname === '/devices' ? 'Devices' : 'Assets'}
          </div>
          <div className="header-actions">
            <span>🔔</span>
            <div className="user-profile">
              <div className="avatar-circle"></div>
              <span>Bi Duong</span>
            </div>
          </div>
        </header>

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;