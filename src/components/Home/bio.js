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
        subheader="About Me"
      />
     
      <CardContent >
        <Typography >
          <ha>Data Scientist specialized in data mining, data visualization and development of tools based on machine learning and deep learning.</ha>
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
          <ha>Programming Languages: Proficient in Python, with experience in R .<br />
          <br />Statistical Analysis: Strong foundation in statistical methods, hypothesis testing, and regression analysis.
          <br />Machine Learning: Expertise in developing and deploying machine learning models for classification, regression, and clustering.
          <br />Data Cleaning and Preprocessing: Skilled in handling and cleaning diverse datasets, managing missing data, and ensuring data quality.</ha>
               
          </Typography>
          <Typography paragraph>
          <ha>Data Visualization: Proficient in creating clear and compelling visualizations using  Matplotlib, Seaborn.
          <br />Big Data Technologies: Familiar with tools such as Apache Spark for efficient processing of large-scale datasets.
          <br />Cloud Services: Experienced in utilizing ( AWS, Google Cloud, and Azure) for scalable and efficient data processing.
          <br />Domain Knowledge: Embedded System, healthcare, finance, e-commerce.
          <br />Communication: Strong communication skills, able to convey complex findings to both technical and non-technical stakeholders.</ha>
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