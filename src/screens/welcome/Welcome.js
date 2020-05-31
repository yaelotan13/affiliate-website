import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Content, Image } from './components';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {

    }
}));

const Welcome = props => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Image />
            <Content />
        </Box>
    )
};

export default Welcome;