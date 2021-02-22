import React from 'react';
import {TeamGrid, Art, ArtMobile, Title} from './style'

import { Section, Container } from '@components/global';


const Skills = ({skillsContent}) => (

  <Section id="skills" accent="secondary">
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



export default Skills;
