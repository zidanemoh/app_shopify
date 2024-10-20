import React, { useState, useEffect } from 'react';
import './styles/champs.css';

const fields = ['Nom', 'Prenom', 'Adresse', 'Telephone', 'email', 'ZIP', 'Pays', 'Remarque'];

const App = () => {
    const [shopifyFields, setShopifyFields] = useState(fields);
    const [currentFields, setCurrentFields] = useState([]);

    useEffect(() => {
        // استعادة الحقول المحفوظة من localStorage عند تحميل الصفحة
        const savedFields = localStorage.getItem('currentFields');
        if (savedFields) {
            setCurrentFields(JSON.parse(savedFields));
        }
    }, []);

    const handleDragStart = (event, field, index, target) => {
        event.dataTransfer.setData('field', field);
        event.dataTransfer.setData('index', index);
        event.dataTransfer.setData('target', target);
    };

    const handleDrop = (event, target) => {
        const field = event.dataTransfer.getData('field');
        const draggedIndex = event.dataTransfer.getData('index');
        const sourceTarget = event.dataTransfer.getData('target');

        if (target === 'currentFields' && !currentFields.includes(field)) {
            setCurrentFields([...currentFields, field]);
            setShopifyFields(shopifyFields.filter(f => f !== field));
        } else if (target === 'shopifyFields' && !shopifyFields.includes(field)) {
            setShopifyFields([...shopifyFields, field]);
            setCurrentFields(currentFields.filter(f => f !== field));
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const saveFields = () => {
        // حفظ الحقول المحددة في localStorage
        localStorage.setItem('currentFields', JSON.stringify(currentFields));
        alert('تم حفظ التغييرات بنجاح');
    };

    return (
        <div className="app">
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

            <div className="content">
                <div className="section" onDrop={(e) => handleDrop(e, 'shopifyFields')} onDragOver={handleDragOver}>
                    <div className="fields-container">
                        <h3>Shopify Fields</h3>
                        {shopifyFields.map((field, index) => (
                            <div
                                key={index}
                                className="field-item"
                                draggable
                                onDragStart={(e) => handleDragStart(e, field, index, 'shopifyFields')}
                                data-index={index}
                            >
                                <div className="icon">🔄</div>
                                {field}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section" onDrop={(e) => handleDrop(e, 'currentFields')} onDragOver={handleDragOver}>
                    <div className="fields-container">
                        <h3>Current Fields</h3>
                        {currentFields.map((field, index) => (
                            <div
                                key={index}
                                className="field-item"
                                draggable
                                onDragStart={(e) => handleDragStart(e, field, index, 'currentFields')}
                                data-index={index}
                            >
                                <div className="icon">🔧</div>
                                {field}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section preview">
                    <div className="fields-container">
                        <h3>Preview</h3>
                        {currentFields.map((field, index) => (
                            <div key={index} className="field-item-preview">
                                <label className="field-label">{field}</label>
                                <div className="field-content">
                                    <div className="icon small">👁️</div>
                                    <span className="field-name">{field}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className="save-button" onClick={saveFields}>Save</button>
        </div>
    );
};

export default App;
