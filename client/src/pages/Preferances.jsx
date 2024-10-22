import React, { useState } from 'react';
import './styles/Preferances.css';


function Preferences() {
  // States للتحكم في الألوان والإعدادات الأخرى
  const [topColor, setTopColor] = useState('#ffffff');
  const [bottomColor, setBottomColor] = useState('#ffffff');
  const [iconColor, setIconColor] = useState('#000000');
  const [borderColor, setBorderColor] = useState('#000000');
  const [labelColor, setLabelColor] = useState('#000000');
  const [fieldColor, setFieldColor] = useState('#ffffff');
  const [borderRadius, setBorderRadius] = useState(30);
  const [borderConcavity, setBorderConcavity] = useState(2);
  const [titleSize, setTitleSize] = useState(4);
  const [titleText, setTitleText] = useState('Order Form');
  const [titleColor, setTitleColor] = useState('#000000');
  const [subtitleSize, setSubtitleSize] = useState(2);
  const [subtitleText, setSubtitleText] = useState('Subtitle');
  const [subtitleColor, setSubtitleColor] = useState('#000000');

  // دوال تحديث الألوان والإعدادات
  const handleTopColorChange = (e) => setTopColor(e.target.value);
  const handleBottomColorChange = (e) => setBottomColor(e.target.value);
  const handleIconColorChange = (e) => setIconColor(e.target.value);
  const handleBorderColorChange = (e) => setBorderColor(e.target.value);
  const handleLabelColorChange = (e) => setLabelColor(e.target.value);
  const handleFieldColorChange = (e) => setFieldColor(e.target.value);
  const handleBorderRadiusChange = (e) => setBorderRadius(e.target.value);
  const handleBorderConcavityChange = (e) => setBorderConcavity(e.target.value);
  const handleTitleSizeChange = (e) => setTitleSize(e.target.value);
  const handleTitleTextChange = (e) => setTitleText(e.target.value);
  const handleTitleColorChange = (e) => setTitleColor(e.target.value);
  const handleSubtitleSizeChange = (e) => setSubtitleSize(e.target.value);
  const handleSubtitleTextChange = (e) => setSubtitleText(e.target.value);
  const handleSubtitleColorChange = (e) => setSubtitleColor(e.target.value);

  return (
    <div className="preferences-page">
      {/* Navbar */}
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

      <div className="preferences-container">
        {/* الجزء الأيسر للنموذج */}
        <div
          className="form-preview"
          style={{
            background: `linear-gradient(to bottom, ${topColor}, ${bottomColor})`,
            borderColor: borderColor,
            borderRadius: `${borderRadius}px`,
          }}
        >
         <div className="form">
            <h2 className="form-title" style={{ color: titleColor, fontSize: `${titleSize}rem` }}>
              {titleText}
            </h2>
            <div className="form-group">
              <label className="form-label" htmlFor="name" style={{ color: labelColor }}>
                Nom
              </label>
              <input
                className="form-input"
                id="name"
                type="text"
                placeholder="Nom"
                style={{ borderRadius: `${borderConcavity}px`, backgroundColor: fieldColor }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="province" style={{ color: labelColor }}>
                Province
              </label>
              <input
                className="form-input"
                id="province"
                type="text"
                placeholder="Province"
                style={{ borderRadius: `${borderConcavity}px`, backgroundColor: fieldColor }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="address" style={{ color: labelColor }}>
                Adresse
              </label>
              <input
                className="form-input"
                id="address"
                type="text"
                placeholder="Adresse"
                style={{ borderRadius: `${borderConcavity}px`, backgroundColor: fieldColor }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone" style={{ color: labelColor }}>
                Numero Telephone
              </label>
              <input
                className="form-input"
                id="phone"
                type="text"
                placeholder="Numero Telephone"
                style={{ borderRadius: `${borderConcavity}px`, backgroundColor: fieldColor }}
              />
            </div>
            <div className="quantity-group">
              <button className="quantity-button" style={{ backgroundColor: iconColor }}>
                -
              </button>
              <span className="quantity">2</span>
              <button className="quantity-button" style={{ backgroundColor: iconColor }}>
                +
              </button>
            </div>
            <button className="send-orders-button">send orders</button>
          </div>
        </div>


        {/* الجزء الأيمن للوحة التخصيص */}
        <div className="customization-panels">
          {/* القسم أ */}
          <div className="panel panel-a">
            <div className="form-customization">
              <h3 className="panel-title">Formulaire</h3>
              {/* مجموعة الألوان */}
              <div className="color-controls">
                <div className="color-picker">
                  <label htmlFor="top-color">LA COULEUR DU HAUT DU FOND</label>
                  <input type="color" id="top-color" value={topColor} onChange={handleTopColorChange} />
                </div>
                <div className="color-picker">
                  <label htmlFor="bottom-color">COULEUR DU BAS DU FOND</label>
                  <input type="color" id="bottom-color" value={bottomColor} onChange={handleBottomColorChange} />
                </div>
                <div className="color-picker">
                  <label htmlFor="icon-color">COULEUR DES ICONES</label>
                  <input type="color" id="icon-color" value={iconColor} onChange={handleIconColorChange} />
                </div>
                <div className="color-picker">
                  <label htmlFor="border-color">COULEUR DE LA BORDURE</label>
                  <input type="color" id="border-color" value={borderColor} onChange={handleBorderColorChange} />
                </div>
                <div className="color-picker">
                  <label htmlFor="field-color">COULEUR DES CHAMPS</label>
                  <input type="color" id="field-color" value={fieldColor} onChange={handleFieldColorChange} />
                </div>
                <div className="color-picker">
                  <label htmlFor="label-color">LABELS COLOR</label>
                  <input type="color" id="label-color" value={labelColor} onChange={handleLabelColorChange} />
                </div>
                <div className="size-picker">
                  <label htmlFor="border-radius">TAILLE DE LA BORDURE</label>
                  <input
                    type="number"
                    id="border-radius"
                    value={borderRadius}
                    onChange={handleBorderRadiusChange}
                  />
                </div>
                <div className="size-picker">
                  <label htmlFor="border-concavity">CONCAVITÉ DE BORDURE</label>
                  <input
                    type="number"
                    id="border-concavity"
                    value={borderConcavity}
                    onChange={handleBorderConcavityChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* القسم ب */}
          <div className="panel panel-b">
            <div className="panel-header">
              <h3 className="panel-title">Titre du formulaire</h3>
            </div>
            <div className="panel-content">
              <div className="form-group-inline">
                <label className="inline-label" htmlFor="form-title">Titre du formulaire</label>
                <input
                  className="inline-input"
                  id="form-title"
                  type="text"
                  placeholder="Order Form"
                  value={titleText}
                  onChange={handleTitleTextChange}
                  style={{ width: '402px' }}
                />
              </div>
              <div className="form-group-inline">
                <label className="inline-label" htmlFor="title-color">Couleur</label>
                <input
                  className="inline-input"
                  id="title-color"
                  type="color"
                  value={titleColor}
                  onChange={handleTitleColorChange}
                  style={{ width: '138px' }}
                />
              </div>
              <div className="form-group-inline">
                <label className="inline-label" htmlFor="title-size">Taille</label>
                <input
                  className="inline-input"
                  id="title-size"
                  type="number"
                  value={titleSize}
                  onChange={handleTitleSizeChange}
                  style={{ width: '138px' }}
                />
              </div>
            </div>
          </div>

          {/* القسم ح */}
          <div className="panel panel-h">
            <div className="panel-header">
              <h3 className="panel-title">Sous-titre du formulaire</h3>
            </div>
            <div className="panel-content">
              <div className="form-group-inline">
                <label className="inline-label" htmlFor="subtitle-text">Sous-titre du formulaire</label>
                <input
                  className="inline-input"
                  id="subtitle-text"
                  type="text"
                  placeholder="Subtitle"
                  value={subtitleText}
                  onChange={handleSubtitleTextChange}
                  style={{ width: '402px' }}
                />
              </div>
              <div className="form-group-inline">
                <label className="inline-label" htmlFor="subtitle-color">Couleur</label>
                <input
                  className="inline-input"
                  id="subtitle-color"
                  type="color"
                  value={subtitleColor}
                  onChange={handleSubtitleColorChange}
                  style={{ width: '138px' }}
                />
              </div>
              <div className="form-group-inline">
                <label className="inline-label" htmlFor="subtitle-size">Taille</label>
                <input
                  className="inline-input"
                  id="subtitle-size"
                  type="number"
                  value={subtitleSize}
                  onChange={handleSubtitleSizeChange}
                  style={{ width: '138px' }}
                />
              </div>
            </div>
          </div>

          {/* القسم خ */}
          <div className="panel panel-kh">
            <div className="panel-header">
              <h3 className="panel-title">Quantité</h3>
            </div>

            <div className="panel-content quantity-section">
              <div className="form-group-inline">
                <label className="inline-label" htmlFor="quantity-title">TITRE DE Quantité</label>
                <input
                  className="inline-input"
                  id="quantity-title"
                  type="text"
                  placeholder="QTY"
                  style={{ width: '246px' }}
                />
              </div>
              <div className="form-group-inline">
                <label className="inline-label" htmlFor="bg-color">COULEUR DE FOND</label>
                <input
                  className="inline-input"
                  id="bg-color"
                  type="color"
                  style={{ width: '174px' }}
                />
              </div>
              <div className="form-group-inline">
                <label className="inline-label" htmlFor="quantity-color">COULEUR</label>
                <input
                  className="inline-input"
                  id="quantity-color"
                  type="color"
                  style={{ width: '174px' }}
                />
              </div>
              <div className="form-group-inline">
                <label className="inline-label" htmlFor="quantity-border">ANGEL</label>
                <input
                  className="inline-input"
                  id="quantity-border"
                  type="number"
                  placeholder="30"
                  style={{ width: '101px' }}
                />
              </div>
            </div>

            <div className="panel-header style-section">
              <h3 className="panel-title">Style</h3>
            </div>

            <div className="panel-content style-section">
              <div className="style-option">
                <label className="switch-label">Dans la même ligne</label>
                <div className="switch">
                  <input type="checkbox" id="switch-line" />
                  <label className="toggle" htmlFor="switch-line"></label>
                </div>
                <div className="quantity-preview">
                  <div className="quantity-group">
                    <button className="quantity-button">-</button>
                    <span className="quantity">2</span>
                    <button className="quantity-button">+</button>
                  </div>
                </div>
              </div>
              <div className="style-option">
                <label className="switch-label">Normal</label>
                <div className="switch">
                  <input type="checkbox" id="switch-normal" />
                  <label className="toggle" htmlFor="switch-normal"></label>
                </div>
                <div className="quantity-preview">
                  <div className="quantity-group">
                    <button className="quantity-button">-</button>
                    <span className="quantity">2</span>
                    <button className="quantity-button">+</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-content style-section">
              <div className="style-option">
                <label className="switch-label">Sans le titre</label>
                <div className="switch">
                  <input type="checkbox" id="switch-no-title" />
                  <label className="toggle" htmlFor="switch-no-title"></label>
                </div>
                <div className="quantity-preview">
                  <div className="quantity-group">
                    <button className="quantity-button">-</button>
                    <span className="quantity">2</span>
                    <button className="quantity-button">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preferences;
