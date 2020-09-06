import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Post = (props) => {
    const {title, body, id, userId} = props.post;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div >
            <Card className={classes.root}>
      <CardContent style={{backgroundColor: '#cfe8fc', height: '30vh'}}>
        
        <Typography variant="h5" component="h2">
          <h3>Title: {title}</h3>
        </Typography>
        <Typography variant="body2" component="p">
          <h4>Post:  {body}</h4>
          <br />
         
        </Typography>
        <Typography className={classes.pos} color="textPrimary">
        <h5>ID: {id} </h5>
        </Typography>
        
       
      </CardContent>
      <CardActions>
        <Link to = {`post/${id}`}>
        <Button variant="contained" color="primary">
       See More! 
      </Button>
        </Link>
      
      </CardActions>
    </Card>

        </div>
    );
};

export default Post;