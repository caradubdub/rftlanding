import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const TEAM = [
  {
    name: 'Trevor Carr',
    image: 'trevor.jpeg',
    role: 'Software Engineer',
    github: 'https://github.com/trevcarr95',
  },
  {
    name: 'Cara Dibdin',
    image: 'cara.jpeg',
    role: 'Software Engineer',
    github: 'https://github.com/caradubdub',
  },
  {
    name: 'James Ferrell',
    image: 'james.jpeg',
    role: 'Software Engineer',
    github: 'https://github.com/jdferrell009',
  },
  {
    name: 'Chris Lung',
    image: 'chris.jpeg',
    role: 'Software Engineer',
    github: 'https://github.com/chrisl-13',
  },
  {
    name: 'Anika Mustafiz',
    image: 'anika.jpeg',
    role: 'Software Engineer',
    github: 'https://github.com/amustafiz',
  },
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        art_ideas1: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="team" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>The Team</h1>
          <TeamGrid>
            {TEAM.map(({ name, image, role, github }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={name}>
                  <ExternalLink key={github} href={github}>
                    <Img fluid={img.childImageSharp.fluid} alt={name} />
                    <Title>{name}</Title>
                    <Subtitle>{role}</Subtitle>
                  </ExternalLink>
                </div>
              );
            })}
          </TeamGrid>
          <Art>
            <Img fluid={data.art_ideas1.childImageSharp.fluid} />
          </Art>
          <ArtMobile>
            <Img fluid={data.art_ideas1.childImageSharp.fluid} />
          </ArtMobile>
        </Container>
      </Section>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 60%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Team;
