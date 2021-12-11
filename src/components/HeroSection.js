import React from 'react';
import Text from './Text';
import avatar from '../assets/img/avatar.jpg';
import Button from './Button';

export default function HeroSection() {
  return (
    <div className="container">
      <h1 className="hero_heading">
        <span>Hello, This is</span>
        <span>Andreea Bobariu</span>
      </h1>
      <div className="hero_image">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="hero_info">
        <Text>
          {' '}
          Experienced Consular Officer with a demonstrated history of working in
          the civic and social organization industry. Dependable team player
          with strong verbal, written, and interpersonal skills. Trained in
          record management and confidentiality. Working in strenuous and
          various environments has enabled me to adapt quickly in any given
          conditions and has provided me with good organizational,
          interpersonal, and numerical skills. Acquiring a new set of skills as
          a future employee will not only benefit the company but will help
          expand and develop my personal portfolio.{' '}
        </Text>
        <Button btnLink="/projects" btnText="see my works" />
      </div>
    </div>
  );
}
