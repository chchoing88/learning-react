import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Star.scss';

const Star = ({selected=false, onRating=f=>f}) => 
    <div className={(selected) ? "selected star" : "star"}
        onClick={(onRating)}
    >

    </div>

Star.propTypes = {
    selectred: PropTypes.bool,
}

export default Star;