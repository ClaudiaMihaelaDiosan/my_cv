import React from 'react';
import {Grid, Art} from './style'


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
              <img src={aboutContent.about_me_img.url} alt={aboutContent.about_me_img.alt} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <img src={aboutContent.education_img.url} alt={aboutContent.education_img.alt} />
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
            <img src={aboutContent.experience_img.url} alt={aboutContent.experience_img.alt} />
            </Art>
          </Grid>
        </Container>
      </Section>
)

      
   
export default About;
