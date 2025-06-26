import React from 'react';
import ProfileCard from '../components/ProfileCards/ProfileCards';
import avatar from '../assets/avatar.png';
import designLogo from '../assets/designlogo.png';
import webdesign from '../assets/webdesign.jpg';

const AboutPage = () => {
  return (
    <section
      className="AboutMe"
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
      {/* Text Section */}
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
        <h1 style={{ color: '#903552', fontSize: '2.5rem', margin: '1rem 0', fontWeight:'900'}}>
          About Me
        </h1>

        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          My name is Gabby, and I specialize in delivering tailored creative solutions through{' '}
          <strong><i>web design, graphic design, and digital content strategy.</i></strong>
          <br /><br />
          With a strong foundation in both design and digital marketing, I help businesses build cohesive online identities that not only look professional but also drive engagement and results.
          <br /><br />
          From developing clean, responsive websites to designing brand assets and crafting content that aligns with marketing goals, I bring a strategic and detail-oriented approach to every project.
          <br /><br />
          I’ve had the opportunity to work with clients across a range of industries, helping them elevate their visual presence and communicate their message effectively in today’s fast-paced digital landscape.
          <br /><br />
          If you’re looking for a reliable creative partner who values clarity, consistency, and collaboration—I’d be glad to connect.
        </p>
      </div>

      {/* Profile Card Section */}
      <div
        className="ProfileCard"
        style={{
          flex: 1,
          minWidth: '300px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '4vh',
        }}
      >
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
          onContactClick={() =>
            window.open('https://www.instagram.com/gabby.designstudio/', '_blank')
          }
        />
      </div>
    </section>
  );
};

export default AboutPage;
