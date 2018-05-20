import React , {Component} from 'react';
import PropTyeps from 'prop-types';
import Star from './Star';
import './Star.css';

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: props.starsSelected || 0
    }
    this.change = this.change.bind(this);
  }
  change(starsSelected) {
    this.setState({starsSelected});
  }
  render() {
    const {totalStars} = this.props;
    const {starsSelected} = this.state;
    return (
        <div className="star-rating">
            {
                [...Array(totalStars)].map((n,i) => 
                    <Star key={i}
                        selected={i<starsSelected}
                        onClick={() => this.change(i+1)}
                     />
                )
            }
            <p>별점 : {starsSelected} / {totalStars}</p>
        </div>
    )
  }
}

StarRating.PropTyeps = {
    totalStars: PropTyeps.number
}

StarRating.defaultProps = {
    totalStars: 5
}

export default StarRating;