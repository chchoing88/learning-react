import PropTyeps from 'prop-types';


const Star = ( selected=false, onClick=f=>f) => 
    <div className={(selected)? "star seleced" : "star"}
        onClick={onClick}>

    </div>

Star.PropTypes = {
    selected: PropTypes.bool,
    onClick: PropTyeps.func
}

export default Star;