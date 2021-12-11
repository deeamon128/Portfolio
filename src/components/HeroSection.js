import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import avatar from '../assets/img/avatar.jpg';
import Button from './Button';

const HeroStyle = styled.div`
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
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
      padding-left: 10px;
    }
  }
  .hero_name {
    font-family: 'Montserrat SemiBold';
    font-size: 3rem;
    color: var(--white);
  }
  .hero_img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyle>
      <div className="hero">
        <div className="container">
          <h1 className="hero_heading">
            <span>Hello, This is</span>
            <span className="hero_name">Andreea Bobariu</span>
          </h1>
          <div className="hero_img">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="hero_info">
            <Text>
              {' '}
              Experienced Consular Officer with a demonstrated history of
              working in the civic and social organization industry. Dependable
              team player with strong verbal, written, and interpersonal skills.
              Trained in record management and confidentiality. Working in
              strenuous and various environments has enabled me to adapt quickly
              in any given conditions and has provided me with good
              organizational, interpersonal, and numerical skills. Acquiring a
              new set of skills as a future employee will not only benefit the
              company but will help expand and develop my personal portfolio.{' '}
            </Text>
            <Button btnLink="/projects" btnText="see my works" />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
}
