import React, { useState } from 'react';
import './styles/pricingplans.css';

const PricingPlans = () => {
  const [activePlan, setActivePlan] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleApplyClick = (plan) => {
    console.log(`Applying for plan: ${plan}`);
    setActivePlan(plan);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pricing-container">
      <h1 className="pricing-title">See our pricing</h1>
      <p className="pricing-subtitle">
        You have Free Unlimited Updates and Premium Support on each plan.
      </p>

      <div className="plans">
        {/* خطة Starter */}
        <div className="plan-card">
          <div className="plan-header">
            <span>Starter</span>
          </div>
          <div className="plan-price">$9.99</div>
          <ul className="plan-features">
            <li><span className="circle"></span> Form Builder</li>
            <li><span className="circle"></span> Multi Pixels</li>
            <li><span className="circle"></span> Google Sheet</li>
            <li><span className="circle"></span> Email Confirmation</li>
            <li><span className="circle"></span> Delivery Fees</li>
            <li className="unavailable"><span className="circle red"></span> Add a colie to the delivery company</li>
            <li className="unavailable"><span className="circle red"></span> ReConvert | Upsell</li>
            <li className="unavailable"><span className="circle red"></span> Quantity Bundle | Upsell</li>
          </ul>
          <button className="apply-button" onClick={() => handleApplyClick('Starter')}>
            Apply
          </button>
        </div>

        {/* خطة Enterprise */}
        <div className="plan-card">
          <div className="plan-header">
            <span>Entreprise</span>
          </div>
          <div className="plan-price">$24.99</div>
          <ul className="plan-features">
            <li><span className="circle"></span> Form Builder</li>
            <li><span className="circle"></span> Multi Pixels</li>
            <li><span className="circle"></span> Google Sheet</li>
            <li><span className="circle"></span> Email Confirmation</li>
            <li><span className="circle"></span> Delivery Fees</li>
            <li><span className="circle"></span> Add a colie to the delivery company</li>
            <li><span className="circle"></span> ReConvert | Upsell</li>
            <li><span className="circle"></span> Quantity Bundle | Upsell</li>
          </ul>
          <button className="apply-button" onClick={() => handleApplyClick('Enterprise')}>
            Apply
          </button>
        </div>
      </div>

      {/* قسم الأسئلة المتكررة */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p>
          You are billed for your app subscriptions and app usage as part of Shopify’s 30-day subscription billing period.
        </p>

        <div className={`faq-item ${openIndex === 0 ? 'open' : ''}`} onClick={() => toggleFAQ(0)}>
          <div className="faq-question">
            When will I be charged?
            <span>{openIndex === 0 ? '-' : '+'}</span>
          </div>
          <div className="faq-answer">
            Apps that charge merchants using subscriptions are billed on an independent, 30-day billing cycle. This billing cycle is charged for at the same time as the Shopify subscription. App charges are activated after the FREE TRIAL DAYS end.
          </div>
        </div>

        <div className={`faq-item ${openIndex === 1 ? 'open' : ''}`} onClick={() => toggleFAQ(1)}>
          <div className="faq-question">
            App prorating, upgrades, and downgrades
            <span>{openIndex === 1 ? '-' : '+'}</span>
          </div>
          <div className="faq-answer">
            If you upgrade or downgrade your subscription with an app, then the app will prompt you to agree to a new recurring app charge. This is because Shopify allows each app only one recurring app charge to be enabled at a time.
          </div>
        </div>

        <div className={`faq-item ${openIndex === 2 ? 'open' : ''}`} onClick={() => toggleFAQ(2)}>
          <div className="faq-question">
            Pause my store?
            <span>{openIndex === 2 ? '-' : '+'}</span>
          </div>
          <div className="faq-answer">
            If you pause your store using the Pause plan, you don't need to uninstall your apps. Your recurring app charges are frozen while your store is on the Pause plan, but the charges resume automatically when you reopen your store.
          </div>
        </div>

        <div className={`faq-item ${openIndex === 3 ? 'open' : ''}`} onClick={() => toggleFAQ(3)}>
          <div className="faq-question">
            Uninstalling apps with recurring charges
            <span>{openIndex === 3 ? '-' : '+'}</span>
          </div>
          <div className="faq-answer">
            Make sure that you consider app billing cycles when you plan to uninstall an app. Recurring app charges are generated the first time an app charge is approved, and then on the first day of an app's billing cycle.
          </div>
        </div>

        <div className={`faq-item ${openIndex === 4 ? 'open' : ''}`} onClick={() => toggleFAQ(4)}>
          <div className="faq-question">
            Why are taxes applied to my app charges?
            <span>{openIndex === 4 ? '-' : '+'}</span>
          </div>
          <div className="faq-answer">
            If you live in a region where Shopify is required to charge taxes on any of your account charges, these charges appear in your Shopify invoice.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
