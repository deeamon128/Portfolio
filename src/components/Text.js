import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  font-weight: 1.3rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
  } ;
`;

export default function Text({ children }) {
  return (
    <PStyle>
      <p>{children}</p>
    </PStyle>
  );
}
