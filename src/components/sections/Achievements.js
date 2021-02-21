import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '@components/global';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';




const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    marginRight: 10,
    marginBottom: 10,
  },
  media: {
    height: 140,
  },
  button: {
    justifyContent: 'center',
  }
});

export default function Achievements({achievementsContent}) {

  const classes = useStyles();

  return (
    <Section id="brands" accent>
    <StyledContainer>
      <div>
        <h1>{achievementsContent.achievements_title.text}</h1>
        <LogoGrid>
      {achievementsContent.achievements_link.map((navItem, index) => {
        return (
  <Card  className={classes.root} >
    <CardActionArea>
    <CardMedia
        component="img"
        alt="alt"
        image={navItem.link_img.url}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      {navItem.link_label.text}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
           {navItem.description.text}
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions >
  <IconButton aria-label="send" color="primary" href={navItem.link.url}>
        <SendIcon />
  </IconButton>
  </CardActions>
</Card>
        )
      })}
        </LogoGrid>
      </div>
      <Art>
        <img src={achievementsContent.achievements_img.url} />
      </Art>
    </StyledContainer>
  </Section>
  )
}



const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30;
  justify-items: center;
  margin-top: 30px;
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
  top: 20%;
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


