import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import UserDetail from './Components/PostDetail/PostDetail';
import PostDetail from './Components/PostDetail/PostDetail';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home/>
        </Route>
        <Route path="/post/:postId">
          <PostDetail/>

        </Route>
        <Route exact path ='/'>
          <Home />
        </Route>
        <Route path='*'>
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
