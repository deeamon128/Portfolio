import React from 'react';
import styled from 'styled-components';
import Text from '../components/Text';
import Button from '../components/Button';
import AboutImg from '../assets/img/AboutImg.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about_subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about_heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about_info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about_info_items {
    margin-top: 15rem;
  }
  .about_info_item {
    margin-bottom: 10rem;
  }
  .about_info_heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about_subheading {
      font-size: 1.8rem;
    }
    .about_heading {
      font-size: 2.8rem;
    }
    .about_info_heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about_subheading">
                Hi, I am <span>Andreea Bobariu</span>
              </p>
              <h2 className="about_heading">junior full stack developer</h2>
              <div className="about_info">
                <Text>
                  Experienced professional with a demonstrated history of
                  working in tech and consular affairs industry. Highly skilled
                  in analytical skills, problem solving, public and
                  international relations. Trained in record management and
                  confidentiality with broad knowledge in tech and
                  administration.
                  <br /> <br />
                  I started coding at the begining of 2021 in the middle of
                  pandemic thinking that is the time for a new change.I believe
                  that my technical skills and knowledge of HTML, CSS, React and
                  more other will render me a valuable addition to your web
                  development team.
                  <br />
                  <br />
                  I’m passionate about developing interactive websites and web
                  features to drive up online traffic and sales, bringing the
                  company to greater heights.
                </Text>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about_info_items">
            <div className="about_info_item">
              <h1 className="about_info_heading">Education</h1>
              <AboutInfoItem
                title="Code First for Girls Academy |    January - March 2022"
                items={['Web Development - HTML, CSS and JavaScript']}
              />
              <AboutInfoItem
                title="Codetap Academy Bootcamp | February - June 2021 "
                items={['Front End Development - HTML, CSS, JavaScript, React']}
              />
              <AboutInfoItem
                title="Raspberry PI Foundation and Centre for Computing Education | January 2021 "
                items={['Introduction to Databases and SQL']}
              />
              <AboutInfoItem
                title="University of West | 2010 - 2013"
                items={['BA (Hons) History and Archaeology ']}
              />
            </div>
            <div className="about_info_item">
              <h1 className="about_info_heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'REACT',
                  'MaterialUI',
                  'styled-components',
                ]}
              />
              <AboutInfoItem
                title="Backend"
                items={[
                  'NodeJs',
                  'Express',
                  'MongoDB',
                  'Git',
                  'Rest API',
                  'JSON',
                ]}
              />
              <AboutInfoItem
                title="Other"
                items={[
                  'Figma',
                  'AdobeXD',
                  'Jira',
                  'Trello',
                  'Github',
                  'Agile',
                ]}
              />
            </div>
            <div className="about_info_item">
              <h1 className="about_info_heading">Experiences</h1>

              <AboutInfoItem
                title="Welfound Lts | January - current"
                items={['junior front end developer']}
              />
              <AboutInfoItem
                title="Ministry of Foreign Affairs, Embassy and Consulate, London | 2021 - current"
                items={['junior full stack developer']}
              />
              <AboutInfoItem
                title="UCL Multimedia Anthropology Lab |    august - december 2021"
                items={['web designer and production volunteer']}
              />
              <AboutInfoItem
                title="BitBee ltd | march - july 2021"
                items={['junior front end developer']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
