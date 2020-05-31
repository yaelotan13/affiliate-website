import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { PrimaryButton } from '../../../components';

const useStyle = makeStyles(theme => ({
    container: {
        width: '60vw',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-8vh'
    },
    header: {
        fontSize: theme.typography.h2.fontSize,
        fontFamily: theme.typography.h1.fontFamily,
        marginBottom: '5vh'
    },
    subHeader: {
        fontSize: theme.typography.h5.fontSize,
        fontFamily: theme.typography.h1.fontFamily,
        color: theme.palette.textColor,
        lineHeight: theme.typography.h3.lineHeight,
        paddingLeft: '8vw',
        paddingRight: '8vw'
    },
    buttonContainer: {
        marginTop: '5vh'
    }
}));

const Content = props => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Typography className={classes.header}>Discover Your Next Gift</Typography>
            <Typography className={classes.subHeader}>Find a cool and unique gift for every occasion based on interests and hobbies! you don't have to know what you are searching for, well do the heavy lifting for you</Typography>
            <Box className={classes.buttonContainer}>
                <PrimaryButton title="Discover"/>
            </Box>
        </Box>
    )
};

export default Content;