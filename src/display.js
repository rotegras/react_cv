import React, { Component  } from 'react';
import PropTypes from 'prop-types';


function Display (props) {
    return (
        <div className="display">
            {props.name}
        </div>
    );
}

Display.propTypes = {
    value: PropTypes.string,
}


export default Display;
