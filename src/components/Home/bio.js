import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import "./style.css"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Bio() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:'5px'
  }}>
    <Card sx={{ maxWidth: 345 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Data Scientist"
        subheader="Me"
      />
     
      <CardContent >
        <Typography >
          <ha>I have combine technical expertise with analytical skills to extract valuable insights from data. They use a variety of tools, technologies, and methodologies to collect, analyze, visualize, and interpret data.</ha>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography  paragraph >
          <ha>Programming and Software Skills.<br />
          <br />Data Analysis and Statistics.
        <br/>  Machine Learning and Deep Learning. </ha>
               
          </Typography>
          <Typography paragraph>
          <ha>Data Visualization and Communication
          <br />Big Data Technologies.
          <br />Problem-Solving and Domain Knowledge.
          <br/>Collaboration and Teamwork.
          </ha>
          </Typography>
          <Typography>
            THank you For Your Attention <br />
            <ha>By Hani Nasri</ha>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </div>
  );
}
