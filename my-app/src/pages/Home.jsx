import React from 'react';
import SpotlightCard from '../components/SpotlightCard';

const HomePage = () => {
  return (
    <main className="main-content" style={{ background: 'none', padding: '2rem' }}>
      <section className="section">
        <h1>Welcome to My Website</h1>

        <div className="spotlight-align">
          <SpotlightCard>
            <h2><i>DISCOVERY</i></h2>
            <p>
              We start by getting to know you—your goals, audience, and vision. 
              Through a discovery call or questionnaire, we gather everything 
              we need to create a strategy that aligns with your brand and business needs.
            </p>
            <div className="included">
              <h3><strong><i>What's Included?</i></strong></h3>
              <ul>
                <li>BRAND RESEARCH</li>
                <li>COMPETITOR ANALYSIS</li>
                <li>DESIGN INSPIRATION</li>
                <li>FEATURE WISHLIST</li>
              </ul>
            </div>
          </SpotlightCard>
          <SpotlightCard>
            <h2><i>DESIGN</i></h2>
            <p>
            Once the vision is clear, we move into designing your site. From wireframes to polished mockups, every pixel is thoughtfully placed to create a beautiful and intuitive experience that reflects your brand.
            </p>
            <div className="included">
              <h3><strong><i>What's Included?</i></strong></h3>
              <ul>
                <li>UX/UI DESIGN</li>
                <li>COLOUR PALETTE</li>
                <li>TYPOGRAPHY</li>
                <li>IMAGERY</li>
                <li>HOMEPAGE & KEY PAGE MOCKUPS</li>
              </ul>
            </div>
          </SpotlightCard>
          <SpotlightCard>
            <h2><i>DEVELOPMENT</i></h2>
            <p>
            We bring your design to life using modern, responsive, and accessible web development practices. Your site will look and function beautifully on all devices.
            </p>
            <div className="included">
              <h3><strong><i>What's Included?</i></strong></h3>
              <ul>
                <li>WEBFLOW/WIX/WORDPRESS OR CUSTOM CODED DEVELOPMENT</li>
                <li>MOBILE OPTIMIZATION</li>
                <li>ANIMATIONS</li>
                <li>ON-PAGE SEO</li>
              </ul>
            </div>
          </SpotlightCard>
          <SpotlightCard>
            <h2><i>LAUNCH & SUPPORT</i></h2>
            <p>
            Once everything is tested and approved, it's launch time! We guide you through the final hand-off, provide tutorials, and offer ongoing support if needed.
            </p>
            <div className="included">
              <h3><strong><i>What's Included?</i></strong></h3>
              <ul>
                <li>LAUNCH CHECKLIST</li>
                <li>DOMAIN CONNECTION</li>
                <li>BASIC TRAINING</li>
                <li>POST-LAUNCH SUPPORT</li>
              </ul>
            </div>
          </SpotlightCard>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
