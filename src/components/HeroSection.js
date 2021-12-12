import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/img/avatar.jpg';
import Button from './Button';
import SocialMediaArrow from '../assets/img/social-media-arrow.svg';
import ScrollDownArrow from '../assets/img/scroll-down-arrow.svg';
import Text from './Text';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero_heading {
    margin-top: 3rem;
    font-size: 2rem;
    margin-bottom: -3rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero_name {
      font-family: 'Montserrat SemiBold';
      font-size: 6rem;
      color: var(--white);
      margin-bottom: 2.5rem;
    }
  }
  .hero_img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero_info {
    margin-top: 1rem;
  }
  .hero_social,
  .hero_scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero_social {
    left: 50px;
  }
  .hero_scrollDown {
    right: 50px;
  }
  .hero_social_indicator,
  .hero_scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero_scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero_social_text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero_heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero_name {
        font-size: 4.5rem;
      }
    }
    .hero_img {
      height: 300px;
    }
    .hero_info {
      margin-top: 3rem;
    }
    .hero_social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero_social_indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero_social_text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero_scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero_heading">
            <span>Hello, This is</span>
            <span className="hero_name">Andreea Bobariu</span>
          </h1>
          <div className="hero_img">
            <img src={avatar} alt="" />
          </div>
          <div className="hero_info">
            <Text>
              I am working as a freelance web designer and developer for 1 year.
              I love to develop new aplication and websites.
            </Text>
            <Button btnText="see my works" btnLink="/projects" />
          </div>
          <div className="hero_social">
            <div className="hero_social_indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero_social_text">
              <ul>
                <li>
                  <a
                    href="https://github.com/deeamon128"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GH
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abobariu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/deeamb8/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero_scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
