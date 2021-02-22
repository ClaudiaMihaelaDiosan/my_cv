import React from 'react';
import { Section} from '@components/global';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import {LogoGrid, StyledContainer, Art} from './style'


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
    <Section id="achievements" accent="primary">
    <StyledContainer>
      <div>
        <h1>{achievementsContent.achievements_title.text}</h1>
        <LogoGrid>
      {achievementsContent.achievements_link.map((navItem) => {
        return (
  <Card  className={classes.root} >
    <CardActionArea>
    <CardMedia
        component="img"
        alt="alt"
        image={navItem.link_img.url}
    />
     <CardActions >
  <IconButton aria-label="send" color="primary" href={navItem.link.url}>
        <SendIcon />
  </IconButton>
  </CardActions>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      {navItem.link_label.text}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
           {navItem.description.text}
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
        )
      })}
        </LogoGrid>
      </div>
      <Art>
        <img src={achievementsContent.achievements_img.url} alt={achievementsContent.achievements_img.alt} />
      </Art>
    </StyledContainer>
  </Section>
  )
}


