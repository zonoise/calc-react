import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function NumberButton({ number, inputNumber }) {

    const style = {
        height: "60px",
        width: "60px"
    }
    return (
        <Button style={style} variant="outlined" onClick={() => inputNumber(number)}>
            {number}
        </ Button>
    );

};

NumberButton.propTypes = {
    number: PropTypes.number
}

export default NumberButton;