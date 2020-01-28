import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard';
// import logo from './logo.svg';
import './App.css';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Home from './component/Home';
import Reset from './component/Reset';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   height: 140,
  //   width: 100,
  // },
  // control: {
  //   padding: '14px',
  // },
}));

function App() {
  const classes = useStyles();
  return (
    // <Container className={classes.control} maxWidth="lg">
    <div>
      <Router>
          {/* <Header subtitle="React"/> */}
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/reset' component={Reset} exact />
            <Route path='/dashboard' component={Dashboard} exact />
          </Switch>
          {/* <Footer/> */}
      </Router>
      {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}

    </div>
  );
}

export default App;
