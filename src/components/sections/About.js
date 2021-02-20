import React from 'react';
import styled from 'styled-components';


import { Section, Container } from '@components/global';

const About = ({aboutContent}) => (
<Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>{aboutContent.about_me_title.text}</h2>
              <p>
                {aboutContent.about_me_content.text}
              </p>
            </div>
            <Art>
              <img src={aboutContent.about_me_img.url} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <img src={aboutContent.education_img.url} />
            </Art>
            <div>
              <h2> {aboutContent.education_title.text}</h2>
              <p>
              {aboutContent.education_content.text}
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>{aboutContent.experience_title.text}</h2>
              <p>
              {aboutContent.experience_content.text}
              </p>
            </div>
            <Art>
            <img src={aboutContent.experience_img.url} />
            </Art>
          </Grid>
        </Container>
      </Section>
)

      
   

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
