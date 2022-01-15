import React from 'react';
import styled from 'styled-components';
import FooterColumns from './FooterColumns';
import Text from './Text';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1,
  .footer__col2,
  .footer__col3 {
    flex: 1;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 3rem;
      }
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <FooterColumns
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col2">
          <FooterColumns
            heading="Contact Info"
            links={[
              {
                title: '07456909920',
                path: '07456909920',
              },
              {
                title: 'andreeambobariu@gmail.com',
                path: 'mailto:andreeambobariu@gmail.com',
              },
              {
                title: 'London, UK',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumns
            heading="Social Media"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/deeamon128',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/abobariu/',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Text>© 2021 - Andreea B</Text>
        </div>
      </div>
    </FooterStyle>
  );
}
