import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby'
import { Section, Container } from '@components/global';


const Achievements = ({achievementsContent}) => (
 
<Section id="brands" accent>
        <StyledContainer>
          <div>
            <h1>{achievementsContent.achievements_title.text}</h1>
            <LogoGrid>
                <Link to={achievementsContent.achievements_link.url}>
                  <img src={achievementsContent.achievements_link_img.url}/>
                </Link>
            </LogoGrid>
          </div>
          <Art>
            <img src={achievementsContent.achievements_img.url} />
          </Art>
        </StyledContainer>
      </Section>
  
)




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
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default Achievements;
