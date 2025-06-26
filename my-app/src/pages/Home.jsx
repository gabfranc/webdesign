import React from 'react';
import FlyingPosters from '../components/Posters/FlyingPosters';
import SpotlightCard from '../components/SpotlightCard';
import ProfileCard from '../components/ProfileCards/ProfileCards';

import designLogo from '../assets/designlogo.png';
import coding from '../assets/coding.jpg';
import uxdesign from '../assets/uxdesign.jpg';
import webdesign from '../assets/webdesign.jpg';
import quickfoods from '../assets/quickfoods.png';
import computer from '../assets/computer.jpg';
import avatar from '../assets/avatar.png';

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
    <main style={{ background: 'none', padding: '2rem', fontFamily: 'sans-serif' }}>

      {/* Hero Section with Flying Posters */}
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '60vh',
          padding: '2rem',
          backgroundColor: '#FFA69E',
          borderRadius: '2rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '3rem',
        }}
      >
        <div style={{ flex: 1, minWidth: '300px', height: '400px' }}>
          <FlyingPosters
            items={posterImages}
            className="posters-section"
          />
        </div>

        <div
          style={{
            flex: 1,
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '2rem',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', margin: '1rem' }}>
            Creative Solutions for Brands Ready to Grow
          </h1>
          <h3 style={{ fontSize: '22.5px', margin: '1rem' }}>Web Design, Graphic & Digital Content that Captivate and Convert</h3>
          <button
            style={{
              padding: '0.75rem 1.5rem',
              background: '#5227FF',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              margin: '1rem'
            }}
          >
            See My Work
          </button>
        </div>
      </section>

      {/* Spotlight + Profile Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'space-between',
        }}
      >

<section className="AboutMe"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '60vh',
          padding: '2rem',
          backgroundColor: '#FFE8E2',
          borderRadius: '2rem',
          color: '#aa4465',
          position: 'relative',
          overflow: 'hidden',
          margin: '2rem',
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '3rem',
          }}
        >
          <h1 style={{ color: 'pink',fontSize: '2.5rem', margin: '1rem' }}>
            About Me
          </h1>

          <p>My name is Gabby, and I specialize in delivering tailored creative solutions through <strong><i>web design, graphic design, and digital content strategy.</i></strong>

With a strong foundation in both design and digital marketing, I help businesses build cohesive online identities that not only look professional but also drive engagement and results. From developing clean, responsive websites to designing brand assets and crafting content that aligns with marketing goals, I bring a strategic and detail-oriented approach to every project.

I’ve had the opportunity to work with clients across a range of industries, helping them elevate their visual presence and communicate their message effectively in today’s fast-paced digital landscape.

If you’re looking for a reliable creative partner who values clarity, consistency, and collaboration—I’d be glad to connect.</p>
        </div>
        <section style={{flex: 1, marginTop:'12vh'}}>
        <div className="ProfileCard"style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center', marginTop: '12vh;' }}>
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
            onContactClick={() => window.open('https://www.instagram.com/gabby.designstudio/', '_blank')}
          />
        </div>
        </section>
      </section>
      <section
  className="offerservices"
  style={{
    marginTop: '12vh',
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }}
>
  <h2 style={{ marginBottom: '2rem' }}>What We Offer?</h2>

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', // force 3 items per row
      gap: '4vh 2vw',
      width: '100%',
    }}
  >
    <SpotlightCard>
      <div className="services" style={{ margin: '2vh', padding: '2vh' }}>
        <h2><i>WEB DESIGN</i></h2>
        <p>Custom websites that look great, load fast, and work on any device.</p>
      </div>
    </SpotlightCard>

    <SpotlightCard>
      <div className="services" style={{ margin: '2vh', padding: '2vh' }}>
        <h2><i>Graphic Design</i></h2>
        <p>Logos, branding, social media graphics, and anything visual.</p>
      </div>
    </SpotlightCard>

    <SpotlightCard>
      <div className="services" style={{ margin: '2vh', padding: '2vh' }}>
        <h2><i>Content & Digital Marketing</i></h2>
        <p>Reels, blogs, email campaigns & strategy that drives engagement.</p>
      </div>
    </SpotlightCard>
  </div>
</section>

<section
  className="worktogether"
  style={{
    marginTop: '16vh',
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }}
>
  <h2 style={{ marginBottom: '2rem' }}>How We'll Work Together?</h2>

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '4vh 2vw',
      width: '100%',
    }}
  >
    <SpotlightCard>
      <div className="services" style={{ margin: '2vh', padding: '2vh' }}>
        <h2><i>DISCOVERY</i></h2>
        <p>We start with a consultation to understand your business, brand voice, audience, and project goals.</p>
        <h3>Includes:</h3>
        <ul>
          <li>Initial call or questionnaire</li>
          <li>Review of existing assets (if any)</li>
          <li>Defining your audience & objectives</li>
        </ul>
      </div>
    </SpotlightCard>

    <SpotlightCard>
      <div className="services" style={{ margin: '2vh', padding: '2vh' }}>
        <h2><i>STRATEGY & PLANNING</i></h2>
        <p>A roadmap tailored to your goals with moodboards, timelines, and deliverables.</p>
        <h3>Includes:</h3>
        <ul>
          <li>Moodboards or wireframes</li>
          <li>Tool & platform selection</li>
          <li>Concept approval</li>
        </ul>
      </div>
    </SpotlightCard>

    <SpotlightCard>
      <div className="services" style={{ margin: '2vh', padding: '2vh' }}>
        <h2><i>DESIGN & CREATE</i></h2>
        <p>Bringing your strategy to life through clean, impactful design and content.</p>
        <h3>Includes:</h3>
        <ul>
          <li>Custom design or content</li>
          <li>2 rounds of revisions</li>
          <li>Milestone feedback</li>
        </ul>
      </div>
    </SpotlightCard>

    <SpotlightCard>
      <div className="services" style={{ margin: '2vh', padding: '2vh' }}>
        <h2><i>LAUNCH & DELIVER</i></h2>
        <p>Final delivery, optimization, and testing across platforms before publishing.</p>
        <h3>Includes:</h3>
        <ul>
          <li>Final files or site handoff</li>
          <li>Platform formatting</li>
          <li>Performance-optimized assets</li>
        </ul>
      </div>
    </SpotlightCard>
    <SpotlightCard>
      <div className="services" style={{ margin: '2vh', padding: '2vh' }}>
        <h2><i>ONGOING SUPPORT</i></h2>
        <p>Need continued help with updates, content planning, or design tweaks? I offer ongoing support packages to help you stay consistent and up-to-date long after the launch.</p>
        <h3>Includes:</h3>
        <ul>
          <li>MONTHLY RETAINERS(design or content)</li>
          <li>ANALYTICS REVIEW & OPTIMIZATION</li>
          <li>PRIORITY SUPPORT</li>
        </ul>
      </div>
    </SpotlightCard>
  </div>
</section>


      </div>
    </main>
  );
};

export default HomePage;
