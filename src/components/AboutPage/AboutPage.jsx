import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { FiMail } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="container">
      <div className='about-center'>

        <img src='https://avatars.githubusercontent.com/u/111449650?v=4' width="120px" />
        <h1>Billy Salinas</h1>

        <div className='contacts'>
          <div className='underline'>
            Linkedin
            <img src='images/about/linkedin.png' width="150px" />
          </div>
          <div className='vertical-list'>
            <div><FaGithub className='contact-icon' /> github.com/WSalinas315</div>
            <div><FiMail className='contact-icon' /> wsalinas315@gmail.com</div>
          </div>
        </div>

        <div className='tech-list'>
          <div className='underline bold'>Tech Used:</div>
          React Google Maps API<br />
          GeoLocation API<br />
          Multer Image Upload<br />
          React<br />
          Material UI<br />
          JavaScript<br />
          Redux<br />
          Saga<br />
          HTML<br />
          CSS<br />
          Node.js<br />
          Express.js<br />
          PostgreSQL<br />
          Passport<br />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
