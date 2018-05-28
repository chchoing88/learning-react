import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const StarRating = ({starSelected=0, totalStars=5, onRating=f=>f}) => 
    <div className="star-rating">
        {
            [...Array(totalStars)].map((n , i) => 
                <Star key={i}
                    selected={i < starSelected}
                    onRating={() => onRating(i+1)}
                />
            )
        }
    </div>
    


StarRating.propTypes = {

}

export default StarRating;