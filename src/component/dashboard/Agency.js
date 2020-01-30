import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import MaterialTable from 'material-table';

// Generate Order Data
function createData(id, name, created) {
  return { id, name, created };
}

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

export default function Agency(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      {title: 'Description',field: 'description',},
    ],
    data: [
      { name: 'essa', description: 'essa desc'},
      {
        name: 'essa2',
        description: 'essa2 description',
      },
    ],
  });

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
          {/* <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>asdsad</h2>
            </Paper>
          </Grid> */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <MaterialTable
                title="Agency"
                columns={state.columns}
                data={state.data}
                editable={{
                  onRowAdd: newData =>
                    new Promise(resolve => {
                      setTimeout(() => {
                        resolve();
                        setState(prevState => {
                          const data = [...prevState.data];
                          data.push(newData);
                          return { ...prevState, data };
                        });
                      }, 600);
                    }),
                  onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                      setTimeout(() => {
                        resolve();
                        if (oldData) {
                          setState(prevState => {
                            const data = [...prevState.data];
                            data[data.indexOf(oldData)] = newData;
                            return { ...prevState, data };
                          });
                        }
                      }, 600);
                    }),
                  onRowDelete: oldData =>
                    new Promise(resolve => {
                      setTimeout(() => {
                        resolve();
                        setState(prevState => {
                          const data = [...prevState.data];
                          data.splice(data.indexOf(oldData), 1);
                          return { ...prevState, data };
                        });
                      }, 600);
                    }),
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>

  );
}
