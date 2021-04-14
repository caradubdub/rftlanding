import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';


import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';




const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <div style={{ fontSize: '12px' }}>
                Made with Gatsby using the Absurd design
              </div>
              <span style={{ fontSize: '12px' }}>
                Illustrations by
                {` `}
                <ExternalLink href="https://twitter.com/diana_valeanu">
                  @diana_valeanu
                </ExternalLink>
              </span>
            </Copyright>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);



const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;



const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
