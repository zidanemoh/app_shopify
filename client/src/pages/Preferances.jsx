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
  const [isTitleVisible, setIsTitleVisible] = useState(true);

  // إدارة الحالة للعنوان الفرعي
  const [subTitle, setSubTitle] = useState("Both titles can be removed/edited");
  const [subTitleColor, setSubTitleColor] = useState("#FFFFFF");
  const [subTitleSize, setSubTitleSize] = useState(1);
  const [isSubTitleVisible, setIsSubTitleVisible] = useState(true);

  // إدارة حالة لوحة التحكم في الكمية
  const [qtyTitle, setQtyTitle] = useState("QTY:");
  const [qtyFieldColor, setQtyFieldColor] = useState("#E7E7E7");
  const [qtyBtnColor, setQtyBtnColor] = useState("#000000");
  const [qtyBorderRadius, setQtyBorderRadius] = useState(30);
  const [qtyValue, setQtyValue] = useState(2);

  // خيارات الأسلوب
  const [isNormalSelected, setIsNormalSelected] = useState(true);
  const [isInlineSelected, setIsInlineSelected] = useState(false);
  const [isNoTitleSelected, setIsNoTitleSelected] = useState(false);

  const handleColorChange = (setter, event) => {
    setter(event.target.value);
  };

  // دالة لتغيير القيمة
  const increaseQty = () => setQtyValue(qtyValue + 1);
  const decreaseQty = () => setQtyValue(qtyValue > 0 ? qtyValue - 1 : 0);

  return (
    <div className="page-container">
      {/* شريط التنقل */}
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

      <div className="main-content-container">
        <div className="control-panel-column">
          {/* لوحة التحكم في الألوان والخلفيات */}
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

          {/* لوحة التحكم في العنوان الفرعي */}
          <div className="title-control-panel">
            <div className="panel-header">
              <h2 className="panel-title">Sous-titre du formulaire</h2>
              <div className="switch-container-right">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isSubTitleVisible}
                    onChange={(e) => setIsSubTitleVisible(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <div className="panel-control">
              <label htmlFor="subTitle">Sous-titre du formulaire</label>
              <input
                type="text"
                id="subTitle"
                className="form-control"
                placeholder="Both titles can be removed/edited"
                value={subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
              />
            </div>
            <div className="panel-control">
              <label htmlFor="subTitleColor">couleur</label>
              <input
                type="color"
                id="subTitleColor"
                className="color-picker"
                value={subTitleColor}
                onChange={(e) => handleColorChange(setSubTitleColor, e)}
                style={{ backgroundColor: subTitleColor }}
              />
            </div>
            <div className="panel-control">
              <label htmlFor="subTitleSize">Taille</label>
              <input
                type="number"
                id="subTitleSize"
                className="size-input"
                value={subTitleSize}
                onChange={(e) => setSubTitleSize(parseInt(e.target.value) || 0)}
              />
            </div>
          </div>

          {/* لوحة التحكم في الكمية */}
          <div className="quantity-control-panel">
            <div className="panel-header">
              <h2 className="panel-title">Quantité</h2>
              <div className="switch-container-right">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <div className="panel-control">
              <label htmlFor="qtyTitle">Titre de Quantité</label>
              <input
                type="text"
                id="qtyTitle"
                className="form-control"
                value={qtyTitle}
                onChange={(e) => setQtyTitle(e.target.value)}
              />
            </div>
            <div className="panel-control">
              <label htmlFor="qtyFieldColor">Couleur du Fond</label>
              <input
                type="color"
                id="qtyFieldColor"
                className="color-picker"
                value={qtyFieldColor}
                onChange={(e) => handleColorChange(setQtyFieldColor, e)}
                style={{ backgroundColor: qtyFieldColor }}
              />
            </div>
            <div className="panel-control">
              <label htmlFor="qtyBtnColor">Couleur</label>
              <input
                type="color"
                id="qtyBtnColor"
                className="color-picker"
                value={qtyBtnColor}
                onChange={(e) => handleColorChange(setQtyBtnColor, e)}
                style={{ backgroundColor: qtyBtnColor }}
              />
            </div>
            <div className="panel-control">
              <label htmlFor="qtyBorderRadius">Angle</label>
              <input
                type="number"
                id="qtyBorderRadius"
                className="size-input"
                value={qtyBorderRadius}
                onChange={(e) => setQtyBorderRadius(parseInt(e.target.value) || 0)}
              />
            </div>
            {/* خيارات النمط - Style Options */}
            <div className="panel-style-options">
              <div className="panel-control">
                <label>Normal</label>
                <label className="switch">
                  <input type="checkbox" checked={isNormalSelected} onChange={(e) => setIsNormalSelected(e.target.checked)} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="panel-control">
                <label>Sans le titre</label>
                <label className="switch">
                  <input type="checkbox" checked={isNoTitleSelected} onChange={(e) => setIsNoTitleSelected(e.target.checked)} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="panel-control">
                <label>Dans la même ligne</label>
                <label className="switch">
                  <input type="checkbox" checked={isInlineSelected} onChange={(e) => setIsInlineSelected(e.target.checked)} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="order-form-column">
          <div className="order-form" style={{ borderRadius: `${borderConcavity}px`, border: `${borderSize}px solid ${borderColor}`, background: `linear-gradient(180deg, ${bgTopColor} 0%, ${bgBottomColor} 100%)` }}>
            {isTitleVisible && (
              <h2 className="form-title" style={{ color: titleColor, fontSize: `${titleSize}rem` }}>
                {formTitle}
              </h2>
            )}
            {isSubTitleVisible && (
              <h3 className="form-sub-title" style={{ color: subTitleColor, fontSize: `${subTitleSize}rem` }}>
                {subTitle}
              </h3>
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
              <button className="quantity-btn" onClick={decreaseQty}>-</button>
              <span className="quantity-value" style={{ color: iconColor }}>{qtyValue}</span>
              <button className="quantity-btn" onClick={increaseQty}>+</button>
            </div>
            <button className="submit-btn">send orders</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;




