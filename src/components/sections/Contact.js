import React from 'react';
import { Section, Container } from '@components/global';
import styled from 'styled-components';

export default () => (
  <Section id="contact" accent>
    <StyledContainer>
      <form
       name ="contact"
       method="post"
       data-netlify="true"
       data-netlify-honeypost="bot-field">
       
       <input name="name" placeholder="You Name" type="text"/>
         <button> Send </button>

      </form>
    </StyledContainer>
    </Section>

);

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;
