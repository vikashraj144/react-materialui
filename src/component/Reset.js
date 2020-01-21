import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, Input, CardContent } from '@material-ui/core';
import clsx from 'clsx';
// import Visibility from '@material-ui/icons/Visibility';


const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }, root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 200,
    },
}));

export default function Reset(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
    });
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const onLogin = () => {
        // console.log("TCL: onReset -> onReset", onReset)
        props.history.push('/');
    }

    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2"> Reset </Typography>
                <div>
                    <FormControl className={clsx(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-email"
                            type='text'
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                        <br></br>
                    </FormControl>
                </div>
            </CardContent>
            <Button variant="contained" color="primary">Reset</Button>
            <Button variant="contained" onClick={onLogin}>Login</Button>

        </Card>
    );
}