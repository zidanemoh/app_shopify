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
  const [borderSize, setBorderSize] = useState(1);
  const [borderConcavity, setBorderConcavity] = useState(30);
  const [formTitle, setFormTitle] = useState("ORDER FORMS");
  const [titleColor, setTitleColor] = useState("#FFFFFF");
  const [titleSize, setTitleSize] = useState(2);
  const [isTitleVisible, setIsTitleVisible] = useState(true); // حالة لعرض العنوان

  // دالة لتحديث القيم اللونية
  const handleColorChange = (setter, event) => {
    setter(event.target.value);
  };

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

      {/* الحاوية التي تحتوي على لوحة التحكم والنموذج */}
      <div className="main-content-container">
        {/* عمود لوحة التحكم */}
        <div className="control-panel-column">
          {/* لوحة التحكم */}
          <div className="form-panel">
            <div className="panel-header">
              <h2 className="panel-title">Formulaire</h2>
            </div>
            <div className="panel-control">
              <label htmlFor="bgTopColor">La couleur du haut du fond</label>
              <input
                type="color"
                id="bgTopColor"
                className="color-picker"
                value={bgTopColor}
                onChange={(e) => handleColorChange(setBgTopColor, e)}
                style={{ backgroundColor: bgTopColor }}
              />
            </div>
            <div className="panel-control">
              <label htmlFor="bgBottomColor">Couleur du bas du fond</label>
              <input
                type="color"
                id="bgBottomColor"
                className="color-picker"
                value={bgBottomColor}
                onChange={(e) => handleColorChange(setBgBottomColor, e)}
                style={{ backgroundColor: bgBottomColor }}
              />
            </div>
            <div className="panel-control">
              <label htmlFor="iconColor">Couleur des icones</label>
              <input
                type="color"
                id="iconColor"
                className="color-picker"
                value={iconColor}
                onChange={(e) => handleColorChange(setIconColor, e)}
                style={{ backgroundColor: iconColor }}
              />
            </div>
            <div className="panel-control">
              <label htmlFor="fieldColor">Couleur des champs</label>
              <input
                type="color"
                id="fieldColor"
                className="color-picker"
                value={fieldColor}
                onChange={(e) => handleColorChange(setFieldColor, e)}
                style={{ backgroundColor: fieldColor }}
              />
            </div>
            <div className="panel-control">
              <label htmlFor="borderColor">Couleur de la bordure</label>
              <input
                type="color"
                id="borderColor"
                className="color-picker"
                value={borderColor}
                onChange={(e) => handleColorChange(setBorderColor, e)}
                style={{ backgroundColor: borderColor }}
              />
            </div>
            <div className="panel-control">
              <label htmlFor="labelColor">Labels Color</label>
              <input
                type="color"
                id="labelColor"
                className="color-picker"
                value={labelColor}
                onChange={(e) => handleColorChange(setLabelColor, e)}
                style={{ backgroundColor: labelColor }}
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

          {/* لوحة التحكم في العنوان */}
          <div className="title-control-panel">
            <div className="panel-header">
              <h2 className="panel-title">Titre du formulaire</h2>
              <div className="switch-container-right">
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={isTitleVisible} 
                    onChange={(e) => setIsTitleVisible(e.target.checked)} 
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
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
                onChange={(e) => handleColorChange(setTitleColor, e)}
                style={{ backgroundColor: titleColor }}
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

        {/* عمود النموذج */}
        <div className="order-form-column">
          <div className="order-form" style={{ borderRadius: `${borderConcavity}px`, border: `${borderSize}px solid ${borderColor}`, background: `linear-gradient(180deg, ${bgTopColor} 0%, ${bgBottomColor} 100%)` }}>
            {isTitleVisible && (
              <h2 className="form-title" style={{ color: titleColor, fontSize: `${titleSize}rem` }}>
                {formTitle}
              </h2>
            )}
            <div className="form-group">
              <label htmlFor="name" style={{ color: labelColor }}>Nom</label>
              <input type="text" id="name" className="form-control" placeholder="Nom" style={{ backgroundColor: fieldColor }} />
            </div>
            <div className="form-group">
              <label htmlFor="province" style={{ color: labelColor }}>Province</label>
              <input type="text" id="province" className="form-control" placeholder="Province" style={{ backgroundColor: fieldColor }} />
            </div>
            <div className="form-group">
              <label htmlFor="adresse" style={{ color: labelColor }}>Adresse</label>
              <input type="text" id="adresse" className="form-control" placeholder="Adresse" style={{ backgroundColor: fieldColor }} />
            </div>
            <div className="form-group">
              <label htmlFor="telephone" style={{ color: labelColor }}>Numero Téléphone</label>
              <input type="text" id="telephone" className="form-control" placeholder="Numero Téléphone" style={{ backgroundColor: fieldColor }} />
            </div>
            <div className="quantity-control">
              <button className="quantity-btn">-</button>
              <span className="quantity-value" style={{ color: iconColor }}>2</span>
              <button className="quantity-btn">+</button>
            </div>
            <button className="submit-btn">send orders</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;




