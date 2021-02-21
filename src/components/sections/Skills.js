import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';


const Skills = ({skillsContent}) => (

  <Section id="team" accent="secondary">
  <Container style={{ position: 'relative' }}>
    <h1>{skillsContent.skills_title.text}</h1>
    <TeamGrid>
    {skillsContent.skill.map((navItem, index) => {
      return (
        <div>
          <img src={navItem.skill_img.url} alt={navItem.skill_img.alt} />
        <Title>{navItem.skill_title.text}</Title>
      </div>

      )
    })}

    </TeamGrid>
    <Art>
    <img src={skillsContent.skills_img.url} alt={skillsContent.skills_img.alt} />
    </Art>
    <ArtMobile>
    <img src={skillsContent.skills_img.url} alt={skillsContent.skills_img.alt} />
    </ArtMobile>
  </Container>
</Section>

)

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
  top: 50%;
  left: 70%;

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

export default Skills;
