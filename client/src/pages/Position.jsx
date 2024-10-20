import React from 'react';
import './styles/position.css';
import form from '../assets/images/form2.jpg';
import pop2 from '../assets/images/pop2.jpg';


const Position = () => {
  return (
    <div className="position-container">
      <nav className="navbar">
        <button className="nav-button home-icon">🏠</button>
        <button className="nav-button">Position</button>
        <button className="nav-button">Champs</button>
        <button className="nav-button">Bouton</button>
        <button className="nav-button">Preferences</button>
        <button className="nav-button">frais es resume</button>
        <button className="nav-button">Features</button>
        <button className="nav-button">Plans</button>
      </nav>

      <div className="form-position-card">
        <h2 className="form-title">Form position</h2>
        <p className="form-subtitle">Choose how do you like to show the form to your customers</p>

        <div className="images-container">
          <div className="image-card">
            <img src={form} alt="Pop-Up Mode" className="form-image" />
            <h3 className="mode-title">Pop-Up Mode</h3>
            <p className="mode-description">Show form as pop-up</p>
            <button className="apply-button">Apply</button>
          </div>
          <div className="image-card">
            <img src={pop2} alt="Flat Mode" className="form-image" />
            <h3 className="mode-title">Flat Mode</h3>
            <p className="mode-description">Show form directly (current)</p>
            <button className="apply-button">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;
