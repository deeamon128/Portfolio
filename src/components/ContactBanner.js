import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Text from './Text';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <Text>Need a front-end developer?</Text>
          <h3 className="contactBanner__heading">Ready to get hired!</h3>
          <Button btnText="contact me" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
