import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import bike from '../../../assetes/images/bike.png';
import bubble from '../../../assetes/images/bubble.png';

const useStyle = makeStyles(theme => ({
    container: {
        width: '80vw',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        backgroundImage: `url(${bike})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '70%',
        zIndex: 2,
    },
    bubble: {
        backgroundImage: `url(${bubble})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '50%',
        height: '60%',
        zIndex: 0,
        position: 'absolute'

    },
}));

const Image = props => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box className={classes.img} />
            <Box className={classes.bubble} />
        </Box>
    )
};

export default Image;