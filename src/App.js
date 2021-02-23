import React from 'react';
import './App.css';
import Nav from './Nav';


import contact from './pages/Contact';
import project from './pages/project';
import profile from './pages/profile';
import blog from './pages/blog';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={project} />
          <Route path="/profile" component={profile} />
          <Route path="/contact" component={contact} />
          
          <Route path="/blog" component={blog} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;