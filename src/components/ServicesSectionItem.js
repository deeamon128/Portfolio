import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import Text from './Text';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem_icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem_title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .servicesItem_para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'web',
  desc = 'lore ipsum',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem_icon">
        {icon}
        <div className="servicesItem_title">{title}</div>
        <div className="servicesItem_para">
          <Text>{desc}</Text>
        </div>
      </div>
    </ItemStyles>
  );
}
