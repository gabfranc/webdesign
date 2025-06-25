import React from 'react';
import SpotlightCard from '../components/SpotlightCard';
import FlyingPosters from '../components/Posters/FlyingPosters';
import ProfileCard from '../components/ProfileCards/ProfileCards';
import designLogo from '../assets/designlogo.png';
import coding from "../assets/coding.jpg";
import uxdesign from "../assets/uxdesign.jpg";
import webdesign from "../assets/webdesign.jpg";
import quickfoods from "../assets/quickfoods.png";
import computer from "../assets/computer.jpg";
import avatar from "../assets/avatar.png";
import magnify from "../assets/magnify.jpg";

const posterImages = [
  designLogo,
  coding,
  uxdesign,
  webdesign,
  quickfoods,
  computer,
];

const HomePage = () => {
  return (
    <main className="main-content" style={{ background: 'none', padding: '2rem' }}>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60vh',
          marginBottom: '3rem',
          padding: '0 4rem',
          backgroundColor: '#FFA69E',
          borderRadius: '2rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ flex: 1, height: '100%' }}>
          <FlyingPosters items={posterImages} className="hero-posters" />
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'left',
            paddingLeft: '2rem',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>
            Designs That Speak for Your Brand
          </h1>
          <button
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              background: '#5227FF',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            See My Work
          </button>
        </div>
      </section>

      {/* Spotlight Section and Profile Card */}
      <div className="splitdev">
        <section className="section spotlight-align">
          {/* DISCOVERY Card */}
          <SpotlightCard className="spotlight-card">
            <div className="HeadCard">
            <h2><i>DISCOVERY</i></h2>
            <p>
              We start by getting to know you—your goals, audience, and vision.
              Through a discovery call or questionnaire, we gather everything we need
              to create a strategy that aligns with your brand and business needs.
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
            </div>
            <div className="imgcard">
              <img
                src={magnify}
                alt="Discovery visual"
                style={{ width: '100%', borderRadius: '90px', marginTop: '1rem' }}
              />
            </div>
          </SpotlightCard>
        </section>

        {/* Profile Card */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <ProfileCard
            avatarUrl={avatar}
            miniAvatarUrl={avatar}
            iconUrl={designLogo}
            grainUrl={webdesign}
            name="Gabrielle Franco"
            title="Web Developer"
            handle="gabby.designstudio"
            status="Online"
            contactText="Let's Connect"
            onContactClick={() => alert("Contact clicked!")}
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
