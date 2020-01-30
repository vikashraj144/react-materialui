import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Container, Grid, Paper, Box, FormControl, InputLabel, Input } from '@material-ui/core';
import Deposits from './Deposits';
import Orders from './Orders';
import clsx from 'clsx';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));


export default function DomainDelete() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    console.log('====================================');
    console.log(values.email);
    console.log('====================================');
  };
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-email">Name</InputLabel>
                <Input
                  id="standard-adornment-email"
                  type='text'
                  value={values.email}
                  onChange={handleChange('email')}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">Org</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type='text'
                  value={values.password}
                  onChange={handleChange('password')}
                />
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
