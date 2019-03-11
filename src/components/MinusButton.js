import React from 'react';
import Button from '@material-ui/core/Button';

function PlusButton({ inputPlus }) {

    return (
        <Button variant="outlined" onClick={() => inputPlus()}>
            +
        </Button>
    );

}

export default PlusButton;