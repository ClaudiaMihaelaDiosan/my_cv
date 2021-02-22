import React from 'react';
import { Container } from '@components/global';
import Cake from '@material-ui/icons/CakeOutlined'
import Location from '@material-ui/icons/LocationCityOutlined'
import Email from '@material-ui/icons/EmailOutlined'
import Phone from '@material-ui/icons/PhoneAndroidOutlined'
import {HeaderWrapper, Art, Grid, Text, } from './style'

const Header = ({headerContent}) => (

      <HeaderWrapper id='home'>
        <Container>
          <Grid>
            <Art>
              <img src={headerContent.profile_image.url} alt="profile" />
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



export default Header;
