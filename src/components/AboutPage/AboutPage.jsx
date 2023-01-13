import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { FiMail } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

function AboutPage() {
  return (
    <div className="container">
      <div>

        <img src='https://avatars.githubusercontent.com/u/111449650?v=4' width="120px" />
        <h1>Billy Salinas</h1>
        <FaGithub /> https://github.com/WSalinas315
        <br />
        <FiMail /> wsalinas315@gmail.com
        <br />
        <br />
        Linkedin
        <img src='images/about/linkedin.png' width="180px" />
        <br />
        Tech Used: <br />
        React Google Maps API <img src='https://raw.githubusercontent.com/JustFly1984/react-google-maps-api/master/logo.png' width="30px" />
        JavaScript <img src='https://d2vqpl3tx84ay5.cloudfront.net/500x/tumblr_lsus01g1ik1qies3uo1_400.png' width="30px" />
        React <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' width="30px" />
        GeoLocation API <br />
        Redux<br />
        Saga <br />
        HTML <br />
        CSS <br />
        Node.js <br />
        Express.js <br />
        PostgreSQL <br />
        Material UI <br />
        Multer Image Upload<br />

      </div>
    </div>
  );
}

export default AboutPage;
