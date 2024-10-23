import React, { useState } from 'react';
import './styles/Preferances.css'; 

function App() {
  // حالة لإدارة قيم الألوان والأحجام
  const [bgTopColor, setBgTopColor] = useState("#1a1a1a");
  const [bgBottomColor, setBgBottomColor] = useState("#000000");
  const [iconColor, setIconColor] = useState("#FFFFFF");
  const [fieldColor, setFieldColor] = useState("#F0F0F0");
  const [borderColor, setBorderColor] = useState("#FFFFFF");
  const [labelColor, setLabelColor] = useState("#FFFFFF");
  const [borderSize, setBorderSize] = useState(30);
  const [borderConcavity, setBorderConcavity] = useState(2);
  const [formTitle, setFormTitle] = useState("ORDER FORMS");
const [titleColor, setTitleColor] = useState("#000000");
const [titleSize, setTitleSize] = useState(4);


  return (
    <div className="page-container">
      {/* شريط التنقل */}
      <nav className="navbar">
        <div className="nav-item home-icon">
          <img src="/path/to/home-icon.png" alt="Home Icon" />
        </div>
        <div className="nav-menu">
          <button className="nav-link">Position</button>
          <button className="nav-link">Champs</button>
          <button className="nav-link">Bouton</button>
          <button className="nav-link">Préferences</button>
          <button className="nav-link">Frais et résumé</button>
          <button className="nav-link">Features</button>
          <button className="nav-link">Plans</button>
        </div>
      </nav>

      {/* الحاوية الجديدة التي تحتوي على لوحة التحكم والنموذج */}
      <div className="content-container">
        {/* لوحة التحكم */}
        <div className="form-panel">
          <h2 className="panel-title">Formulaire</h2>
          <div className="panel-control">
            <label htmlFor="bgTopColor">La couleur du haut du fond</label>
            <input
              type="color"
              id="bgTopColor"
              className="color-picker"
              value={bgTopColor}
              onChange={(e) => setBgTopColor(e.target.value)}
            />
          </div>
          <div className="panel-control">
            <label htmlFor="bgBottomColor">Couleur du bas du fond</label>
            <input
              type="color"
              id="bgBottomColor"
              className="color-picker"
              value={bgBottomColor}
              onChange={(e) => setBgBottomColor(e.target.value)}
            />
          </div>
          <div className="panel-control">
            <label htmlFor="iconColor">Couleur des icones</label>
            <input
              type="color"
              id="iconColor"
              className="color-picker"
              value={iconColor}
              onChange={(e) => setIconColor(e.target.value)}
            />
          </div>
          <div className="panel-control">
            <label htmlFor="fieldColor">Couleur des champs</label>
            <input
              type="color"
              id="fieldColor"
              className="color-picker"
              value={fieldColor}
              onChange={(e) => setFieldColor(e.target.value)}
            />
          </div>
          <div className="panel-control">
            <label htmlFor="borderColor">Couleur de la bordure</label>
            <input
              type="color"
              id="borderColor"
              className="color-picker"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
            />
          </div>
          <div className="panel-control">
            <label htmlFor="labelColor">Labels Color</label>
            <input
              type="color"
              id="labelColor"
              className="color-picker"
              value={labelColor}
              onChange={(e) => setLabelColor(e.target.value)}
            />
          </div>
          <div className="panel-control">
            <label htmlFor="borderSize">Taille de la bordure</label>
            <input
              type="number"
              id="borderSize"
              className="size-input"
              value={borderSize}
              onChange={(e) => setBorderSize(parseInt(e.target.value) || 0)}
            />
          </div>
          <div className="panel-control">
            <label htmlFor="borderConcavity">Concavité de bordure</label>
            <input
              type="number"
              id="borderConcavity"
              className="size-input"
              value={borderConcavity}
              onChange={(e) => setBorderConcavity(parseInt(e.target.value) || 0)}
            />
          </div>
        </div>

        {/* نموذج الطلب */}
        <div
          className="order-form"
          style={{
            background: `linear-gradient(180deg, ${bgTopColor} 0%, ${bgBottomColor} 100%)`,
            border: `${borderSize}px solid ${borderColor}`,
            borderRadius: `${borderConcavity}px`,
          }}
        >
          <h2 className="form-title" style={{ color: labelColor }}>
            ORDER FROM
          </h2>
          <div className="form-group">
            <label htmlFor="name" style={{ color: labelColor }}>
              Nom
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Nom"
              style={{ backgroundColor: fieldColor }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="province" style={{ color: labelColor }}>
              Province
            </label>
            <input
              type="text"
              id="province"
              className="form-control"
              placeholder="Province"
              style={{ backgroundColor: fieldColor }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="adresse" style={{ color: labelColor }}>
              Adresse
            </label>
            <input
              type="text"
              id="adresse"
              className="form-control"
              placeholder="Adresse"
              style={{ backgroundColor: fieldColor }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="telephone" style={{ color: labelColor }}>
              Numero Téléphone
            </label>
            <input
              type="text"
              id="telephone"
              className="form-control"
              placeholder="Numero Téléphone"
              style={{ backgroundColor: fieldColor }}
            />
          </div>
          <div className="quantity-control">
            <button className="quantity-btn">-</button>
            <span className="quantity-value" style={{ color: iconColor }}>
              2
            </span>
            <button className="quantity-btn">+</button>
          </div>
          <button className="submit-btn">send orders</button>
        </div>
      </div>
      <div className="title-control-panel">
  <h2 className="panel-title">Titre du formulaire</h2>
  
  <div className="panel-control">
    <label htmlFor="formTitle">Titre du formulaire</label>
    <input 
      type="text" 
      id="formTitle" 
      className="form-control" 
      placeholder="ORDER FORMS" 
      value={formTitle} 
      onChange={(e) => setFormTitle(e.target.value)} 
    />
  </div>

  <div className="panel-control">
    <label htmlFor="titleColor">couleur</label>
    <input 
      type="color" 
      id="titleColor" 
      className="color-picker" 
      value={titleColor} 
      onChange={(e) => setTitleColor(e.target.value)} 
    />
  </div>

  <div className="panel-control">
    <label htmlFor="titleSize">Taille</label>
    <input 
      type="number" 
      id="titleSize" 
      className="size-input" 
      value={titleSize} 
      onChange={(e) => setTitleSize(parseInt(e.target.value) || 0)} 
    />
   </div>
  </div>
 </div> 
 
  );
}

export default App;
