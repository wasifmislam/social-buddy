import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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


const PostComments = (props) => {
    const {name, body,email,id} = props.postCom;
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (
        <div >
             <Card className={classes.root}>
      <CardContent style={{ backgroundColor: '#cfe8fc', height: '25vh' }}>
        
        <Typography variant="h6" component="h2">
        <p><strong>Comment:</strong> {body}</p>
       
        </Typography>
        <Typography className={classes.pos} color="textPrimary">
        
        <p><strong>Name:</strong> {name}</p>
        </Typography>
        <Typography variant="body2" component="p">
        <p><strong>Email:</strong>{email}</p>
          <br />
         
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    );
};

export default PostComments;




            
            
           



