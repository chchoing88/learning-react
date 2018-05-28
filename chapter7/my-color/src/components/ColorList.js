import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';
import '../stylesheets/ColorList.scss';

const ColorList = ({colorList=[], onRemove=f=>f, onRating=f=>f}) => 
    <div className="color-list">
        {   (colorList.length === 0) ? 
            <p>색이 없습니다. 색을 추가해주세요.</p> : 
            colorList.map(color => 
                <Color key={color.id} 
                    {...color} 
                    onRemove={() => onRemove(color.id)}
                    onRating={rating => onRating(color.id, rating)}
                />
            )
            
        }
        
    </div>


ColorList.propTypes = {
    colorList: PropTypes.array,
    onRemove: PropTypes.func,

}
export default ColorList;