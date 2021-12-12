import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services_allItems {
    display: flex;
    gap: 10px;
    justify-content: space-around;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services_allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services_allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="Proeficent with CSS, styled components and Material UI to obtain an unique design for your website."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
