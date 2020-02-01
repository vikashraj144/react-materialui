import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, Container, Grid, Paper, TableContainer, TablePagination } from '@material-ui/core';

const columns = [
  { id: 'domain', label: 'Domain', minWidth: 170 },
  { id: 'created', label: 'Created', minWidth: 100 },
  { id: 'configuration', label: 'Configuration', minWidth: 100 },
  { id: 'deleteBtn', label: 'Delete', minWidth: 50 },
];

function createData(domain, created, configuration, deleteBtn) {
  return { domain, created, configuration, deleteBtn };
}

const rows = [
  createData('India', '19-01-1988', 'config', 'delete'),
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
  btn: {
    width: '15%'
  }
}));

export default function AddDomain(props) {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />

      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Button variant="contained" className={classes.btn} color="primary">
                Add Domain
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Add Domain</h2>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>

  );
}
