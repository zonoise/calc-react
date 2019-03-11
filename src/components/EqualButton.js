import React from 'react';
import Button from '@material-ui/core/Button';

function EqualButton({ inputEqual }) {

    return (
        <Button variant="outlined" className="EqualButton" onClick={() => inputEqual()}>
            =
        </Button>
    );

}

export default EqualButton;