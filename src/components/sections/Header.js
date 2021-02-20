import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/global';

const Header = ({headerContent}) => (

      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <img src={headerContent.profile_image.url} />
            </Art>
            <Text>
          <h1>
          {headerContent.name.text}
          </h1>
          <br />
          <p>
          {headerContent.birthday.text}
          <br />
          {headerContent.location.text}
          <br />
          {headerContent.email.text}
          <br />
          {headerContent.phone_number.text}
          </p>
        </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
)




const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

export default Header;
