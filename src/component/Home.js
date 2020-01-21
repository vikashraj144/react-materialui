import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField, IconButton, InputAdornment, FormControl, InputLabel, Input } from '@material-ui/core';
import clsx from 'clsx';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


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

export default function Home(props) {
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

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };
    const onReset = () => {
        console.log("TCL: onReset -> onReset", onReset)
        props.history.push('/reset');
    }

    const onLogin = () => {
        console.log("TCL: onReset -> onReset", onReset)
        props.history.push('/reset');
    }
    
    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
                <Typography variant="h5" component="h2">Login</Typography>
                <div>
                    {/* <TextField
          id="standard-error-helper-text"
          label="Email Id"
          defaultValue=""
          helperText="Incorrect entry."
        /> */}
                    <FormControl className={clsx(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-email"
                            type='text'
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                        <br></br>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </div>
            </CardContent>
            <Button variant="contained" color="primary">Login</Button>
            <Button variant="contained" onClick={onReset}>Reset</Button>

        </Card>
    );
}