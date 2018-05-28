import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Color.scss';
import StarRating from './StarRating';

class Color extends Component {

    componentWillMount(){
        this.style = {backgroundColor: '#ccc'}
    }

    componentWillUpdate(nextProps){
        const {title, rating} = this.props;
        this.style = null;
        this._title.style.backgroundColor = 'red';
        this._title.style.color = 'white';
        alert(`${title}: 평점 ${rating} -> ${nextProps.rating}`);
    }

    shouldComponentUpdate(nextProps){
        const {rating} = this.props;
        return rating !== nextProps.rating;
    }

    
    
    componentDidUpdate(prevProps){
        const {title, rating} = this.props;
        const status = (rating > prevProps.rating) ? '좋아짐' : '나빠짐';

        console.log(`${title} 평점이 ${status}`);

        this._title.style.backgroundColor = '';
        this._title.style.color = 'black';
              
    }

    render(){
        const {title, color, rating, onRemove=f=>f, onRating=f=>f} = this.props;
        return (
            <section className="color" style={this.style}>
                <h1 ref={input => this._title = input}>{title}</h1>
                <button onClick={onRemove}>X</button>
                <div className="color" style={{backgroundColor: color}}>

                </div>
                <div>
                    <StarRating 
                        starSelected={rating}
                        onRating={onRating}
                    />
                </div>
            </section>
        )
    }
}


// const Color = ({title, color, rating, onRemove=f=>f, onRating=f=>f}) => 
//     <section className="color">
//         <h1>{title}</h1>
//         <button onClick={onRemove}>X</button>
//         <div className="color" style={{backgroundColor: color}}>

//         </div>
//         <div>
//             <StarRating 
//                 starSelected={rating}
//                 onRating={onRating}
//             />
//         </div>
//     </section>

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
}

export default Color;