import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    button: {
        backgroundColor: theme.palette.primaryColor,
        color: theme.palette.white,
        fontFamily: theme.typography.h2.fontFamily,
        width: '12vw',
        height: '6vh',
        borderRadius: 25
    }
}));

const PrimaryButton = props => {
    const classes = useStyle();
    const { title } = props;

    return (
        <Button className={classes.button} variant="contained">{title}</Button>
    )
};

export default PrimaryButton;