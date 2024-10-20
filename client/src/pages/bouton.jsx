import React, { useState } from 'react';
import './styles/bouton.css';

function Bouton() {
  const [buttonTitle, setButtonTitle] = useState("send orders");
  const [buttonTextSize, setButtonTextSize] = useState(32);
  const [buttonTextColor, setButtonTextColor] = useState("#ffffff");
  const [buttonLeftBgColor, setButtonLeftBgColor] = useState("#253452");
  const [buttonRightBgColor, setButtonRightBgColor] = useState("#6a0dad");
  const [buttonBorderColor, setButtonBorderColor] = useState("#000000");
  const [borderConcavity, setBorderConcavity] = useState(30);
  const [borderSize, setBorderSize] = useState(1);
  const [isShadowEnabled, setIsShadowEnabled] = useState(false);
  const [isAnimationEnabled, setIsAnimationEnabled] = useState('');

  // State variables for Pop-up button
  const [popupButtonTitle, setPopupButtonTitle] = useState("commondes");
  const [popupButtonTextSize, setPopupButtonTextSize] = useState(32);
  const [popupButtonTextColor, setPopupButtonTextColor] = useState("#ffffff");
  const [popupButtonLeftBgColor, setPopupButtonLeftBgColor] = useState("#253452");
  const [popupButtonRightBgColor, setPopupButtonRightBgColor] = useState("#6a0dad");
  const [popupButtonBorderColor, setPopupButtonBorderColor] = useState("#000000");
  const [popupBorderConcavity, setPopupBorderConcavity] = useState(30);
  const [popupBorderSize, setPopupBorderSize] = useState(1);

  const [activeAnimation, setActiveAnimation] = useState('');

  const applyAnimation = (animation) => {
    setIsAnimationEnabled(animation);
    setActiveAnimation(animation);
    setTimeout(() => {
      setActiveAnimation(''); // إزالة الأنيميشن بعد وقت معين
    }, 1000); // يمكن تعديل الوقت
  };

  return (
    <div className="bouton-page">
      <nav className="navbar">
        <button className="nav-button home-icon">🏠</button>
        <button className="nav-button">Position</button>
        <button className="nav-button">Champs</button>
        <button className="nav-button">Bouton</button>
        <button className="nav-button">Preferences</button>
        <button className="nav-button">Frais es resume</button>
        <button className="nav-button">Features</button>
        <button className="nav-button">Plans</button>
      </nav>

      <div className="container">
        <div className="customization-section">
          <h2 className="section-title">Paramètre du bouton</h2>
          
          <div className="input-row">
            <div className="input-group">
              <label>TITRE DU BOUTON</label>
              <input 
                type="text" 
                value={buttonTitle} 
                onChange={(e) => setButtonTitle(e.target.value)} 
              />
            </div>
            <div className="input-group">
              <label>TAILLE DU TITRE</label>
              <input 
                type="number" 
                value={buttonTextSize} 
                onChange={(e) => setButtonTextSize(e.target.value)} 
              />
            </div>
            <div className="input-group">
              <label>COULEUR DU TEXTE</label>
              <input 
                type="color" 
                value={buttonTextColor} 
                onChange={(e) => setButtonTextColor(e.target.value)} 
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>COULEUR DU FOND (gauche)</label>
              <input 
                type="color" 
                value={buttonLeftBgColor} 
                onChange={(e) => setButtonLeftBgColor(e.target.value)} 
              />
            </div>
            <div className="input-group">
              <label>COULEUR DU FOND (droite)</label>
              <input 
                type="color" 
                value={buttonRightBgColor} 
                onChange={(e) => setButtonRightBgColor(e.target.value)} 
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>COULEUR DE LA BORDURE</label>
              <input 
                type="color" 
                value={buttonBorderColor} 
                onChange={(e) => setButtonBorderColor(e.target.value)} 
              />
            </div>
            <div className="input-group">
              <label>CONCAVITÉ DE BORDURE</label>
              <input 
                type="number" 
                value={borderConcavity} 
                onChange={(e) => setBorderConcavity(e.target.value)} 
              />
            </div>
            <div className="input-group">
              <label>TAILLE DE LA BORDURE</label>
              <input 
                type="number" 
                value={borderSize} 
                onChange={(e) => setBorderSize(e.target.value)} 
              />
            </div>
          </div>

          <div className="preference-section">
            <h3 className="preference-title">Préférence</h3>
            <div className="switch-container">
              <label>Afficher l'ombre des boutons</label>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={isShadowEnabled} 
                  onChange={() => setIsShadowEnabled(!isShadowEnabled)} 
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="switch-container">
              <label>Animations des boutons</label>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={isAnimationEnabled !== ''}
                  onChange={() => setIsAnimationEnabled(isAnimationEnabled ? '' : 'shake')} 
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <div className="animation-buttons">
            <button
              className={`animation-button ${activeAnimation === 'shake' ? 'shake' : ''}`}
              onClick={() => applyAnimation('shake')}
            >
              Shake
            </button>
            <button
              className={`animation-button ${activeAnimation === 'bounce' ? 'bounce' : ''}`}
              onClick={() => applyAnimation('bounce')}
            >
              Bounce
            </button>
            <button
              className={`animation-button ${activeAnimation === 'tada' ? 'tada' : ''}`}
              onClick={() => applyAnimation('tada')}
            >
              Tada
            </button>
            <button
              className={`animation-button ${activeAnimation === 'flicker' ? 'flicker' : ''}`}
              onClick={() => applyAnimation('flicker')}
            >
              Flicker
            </button>
            <button
              className={`animation-button ${activeAnimation === 'squeeze' ? 'squeeze' : ''}`}
              onClick={() => applyAnimation('squeeze')}
            >
              Squeeze
            </button>
          </div>
        </div>

        <div className="preview-section">
          <div className="order-form">
            <h3>Order From</h3>
            <div className="form-fields">
              <div className="form-field">
                <i className="icon user-icon"></i>
                <span>Nom</span>
              </div>
              <div className="form-field">
                <i className="icon province-icon"></i>
                <span>Province</span>
              </div>
              <div className="form-field">
                <i className="icon address-icon"></i>
                <span>Adresse</span>
              </div>
              <div className="form-field">
                <i className="icon phone-icon"></i>
                <span>Numero Telephone</span>
              </div>
            </div>
            <button 
              className={`custom-button ${isAnimationEnabled}`}
              style={{
                background: `linear-gradient(to right, ${buttonLeftBgColor}, ${buttonRightBgColor})`,
                color: buttonTextColor,
                fontSize: `${buttonTextSize}px`,
                borderColor: buttonBorderColor,
                borderRadius: `${borderConcavity}px`,
                borderWidth: `${borderSize}px`,
                boxShadow: isShadowEnabled ? '2px 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
              }}
            >
              {buttonTitle}
            </button>
          </div>
        </div>
      </div>

      {/* Popup Button Customization Section */}
      <div className="popup-customization-section">
        <h2 className="section-title">Paramètre du bouton (Pop-up)</h2>

        <div className="input-row">
          <div className="input-group">
            <label>TITRE DU BOUTON</label>
            <input 
              type="text" 
              value={popupButtonTitle} 
              onChange={(e) => setPopupButtonTitle(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label>TAILLE DU TITRE</label>
            <input 
              type="number" 
              value={popupButtonTextSize} 
              onChange={(e) => setPopupButtonTextSize(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label>COULEUR DU TEXTE</label>
            <input 
              type="color" 
              value={popupButtonTextColor} 
              onChange={(e) => setPopupButtonTextColor(e.target.value)} 
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>COULEUR DU FOND (gauche)</label>
            <input 
              type="color" 
              value={popupButtonLeftBgColor} 
              onChange={(e) => setPopupButtonLeftBgColor(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label>COULEUR DU FOND (droite)</label>
            <input 
              type="color" 
              value={popupButtonRightBgColor} 
              onChange={(e) => setPopupButtonRightBgColor(e.target.value)} 
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>COULEUR DE LA BORDURE</label>
            <input 
              type="color" 
              value={popupButtonBorderColor} 
              onChange={(e) => setPopupButtonBorderColor(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label>CONCAVITÉ DE BORDURE</label>
            <input 
              type="number" 
              value={popupBorderConcavity} 
              onChange={(e) => setPopupBorderConcavity(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label>TAILLE DE LA BORDURE</label>
            <input 
              type="number" 
              value={popupBorderSize} 
              onChange={(e) => setPopupBorderSize(e.target.value)} 
            />
          </div>
        </div>

        <button 
          className="save-button"
          style={{
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          save
        </button>
      </div>

      {/* Preview Popup Button */}
      <div className="popup-preview-section">
        <h3>pop_up</h3>
        <button 
          className="popup-button"
          style={{
            background: `linear-gradient(to right, ${popupButtonLeftBgColor}, ${popupButtonRightBgColor})`,
            color: popupButtonTextColor,
            fontSize: `${popupButtonTextSize}px`,
            borderColor: popupButtonBorderColor,
            borderRadius: `${popupBorderConcavity}px`,
            borderWidth: `${popupBorderSize}px`,
          }}
        >
          {popupButtonTitle}
        </button>
      </div>
    </div>
  );
}

export default Bouton;
