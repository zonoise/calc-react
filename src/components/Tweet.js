import React from 'react';
import PropTypes from 'prop-types';

class Tweet extends React.Component {
    render() {
        return (
            < div className="Tweet" >
                {this.props.text}
            </div >
        );
    }
}

Tweet.propTypes = {
    text: PropTypes.string
}

export default Tweet;