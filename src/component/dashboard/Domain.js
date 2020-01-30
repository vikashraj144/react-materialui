import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import Main from './Main';

// Generate Order Data
function createData(id, name, created) {
  return { id, name, created };
}

const rows = [
  createData(1, 'essa 1', '16 Mar, 2019'),
  createData(2, 'essa 2, 2019', '16 Mar, 2019'),
  createData(3, 'essa 3, 2019', '16 Mar, 2019'),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
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

export default function Domain(props) {
  const classes = useStyles();

  const onConfiguration = () => {
    props.history.push('/dashboard');
  }
  const onDelete = () => {
    props.history.push('/dashboard');
  }
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />

      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={4}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>asdsad</h2>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>Recent added domain</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Domain</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell> Configuration </TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.created}</TableCell>
                      <TableCell>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          onClick={onConfiguration}
                        >
                          Configuration
                    </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          onClick={onDelete}
                        >
                          Delete
                    </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>

  );
}
