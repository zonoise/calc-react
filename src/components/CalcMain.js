import React, { Component } from 'react';
import Navigation from './Navigation';

import NumberButton from '../containers/NumberButton';
import PlusButton from '../containers/PlusButton';
import EqualButton from '../containers/EqualButton';
import Display from '../containers/Display';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class CalcMain extends Component {
    render() {

        const calcGridStyle = {
            margin: "auto",
            width: "500px",
            padding: "10px",
            backgroundColor: "red"

        };

        const buttonGridStyle = {
            // boder: "1px solid black",
            padding: "10px 0",
            margin: 0
        };

        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" >
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Calc
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper style={calcGridStyle}>
                    <Grid container className="Calc">
                        <Navigation />
                        <Grid item xs={12}>
                            <Display />
                        </Grid>

                        <Grid item alignItems="center" xs={9} container>
                            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(number => (
                                <Grid key={number} style={buttonGridStyle} item xs={4}>
                                    <NumberButton number={number} />
                                </Grid>
                            ))}
                        </Grid>

                        <Grid item xs={3} container alignItems="baseline">
                            <Grid item xs={12}><PlusButton /></Grid>
                            <Grid item xs={12}><EqualButton /></Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </React.Fragment >
        );
    }
}