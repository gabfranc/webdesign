import React from 'react';
import ProfileCard from '../components/ProfileCards/ProfileCards';
import avatar from '../assets/avatar.png';
import designLogo from '../assets/designlogo.png';
import webdesign from '../assets/webdesign.jpg';


const ContactPage = () => {
  return (
    <main className="contact-main">

      <div className="contact-content-wrapper">

        {/* Contact Info */}
        <section className="contact-info-section">
          <h1>Contact Me</h1>
          <p>If you’re interested in working together or have any questions, feel free to reach out!</p>
          <ul>
            <li><strong>Email:</strong> gab.ann.franco@gmail.com</li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/gabby.designstudio" target="_blank" rel="noopener noreferrer">@gabby.designstudio</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/gabriellefranco/" target="_blank" rel="noopener noreferrer">Gabrielle Franco</a></li>
            <li><a href="https://form.jotform.com/242768140142048">Need a Website?</a></li>
            <li><a href="https://form.jotform.com/251816674779070">Need a Graphic Design?</a></li>
          </ul>  
        </section>

        {/* Profile Card */}
        <section className="profile-card-section">
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
        </section>
      </div> 
    </main> 
  );
};

export default ContactPage;