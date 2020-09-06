import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComments from '../PostComments/PostComments';
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

const PostDetail = (props) => {
    const {postId} = useParams();
    const [posts, setPosts] = useState({})
    const [postComment, setPostComment] = useState([])
    //const [postComment, setPostComment] = useState([])
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        //const url = `https://jsonplaceholder.typicode.com/comments/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data=> setPostComment(data));
        
    },[])
    return (
        <div>
            <Card className={classes.root}>
      <CardContent style={{backgroundColor:'lightblue'}}>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
        <p>ID: {posts.id}</p>
        </Typography> */}
        <Typography variant="h5" component="h2">
        <h1>Title: {posts.title}</h1>
        </Typography>
        
        <Typography variant="body2" component="p">
        <h2>Post: {posts.body}</h2>
          <br />
          {
           postComment.map(postCom => <PostComments postCom={postCom}></PostComments>  )
          }
          {/* <p> Name : {postComment.name}</p>
<p>Email : {postComment.email}</p> */}
        </Typography>
      </CardContent>
      
    </Card>
           
        </div>
    );
};

export default PostDetail;




