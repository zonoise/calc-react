import React from 'react';
import Typography from '@material-ui/core/Paper';

function Display({ display }) {

    const style = {
        padding: "10px",
        margin: "10px 0"
    };

    return (
        <Typography style={style} variant="display4" color="inherit" className="Display">
            {display}
        </Typography>
    );
}

export default Display;