import { Link } from 'react-router-dom'
import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            < div className="Navigation" >
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
            </div >
        );
    }
}

export default Navigation;