import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/global';
import Cake from '@material-ui/icons/CakeOutlined'
import Location from '@material-ui/icons/LocationCityOutlined'
import Email from '@material-ui/icons/EmailOutlined'
import Phone from '@material-ui/icons/PhoneAndroidOutlined'

const Header = ({headerContent}) => (

      <HeaderWrapper id='home'>
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
          <Cake/> {headerContent.birthday.text}
          <br />
          <Location/> {headerContent.location.text}
          <br />
          <Email/> {headerContent.email.text}
          <br />
          <Phone/> {headerContent.phone_number.text}
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
