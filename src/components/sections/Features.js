import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';


import { Section, Container } from '@components/global';


const LOGOS = [
  {
    feature: 'Zoom and pan over the component tree visualization.',
  },
  {
    feature:
      'Vertical and horizontal tree orientation options for visualization view.',
  },
  {
    feature: 'See data requests in highlighted components on click.',
  },
  {
    feature:
      'Toggle between visualization and table view of data requests in components.',
  },
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="features" accent>
        <StyledContainer>
          <div>
            <h1 align="center">Features</h1>
            <LogoGrid>
              {LOGOS.map(({ feature, link }) => (
                <div
                  style={{
                    border: 'lightgray solid 0.5px',
                    borderRadius: '10px',
                    padding: '50px 30px 10vh 50px',
                  }}
                >
                  <p>{feature}</p>
                </div>
              ))}
            </LogoGrid>
          </div>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;



export default UsedBy;
