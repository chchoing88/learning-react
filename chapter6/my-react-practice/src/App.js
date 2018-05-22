import React , {Component} from 'react';
import PropTyeps from 'prop-types';
import './Star.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: []
        }
    }

    render() {
        const { colors } = this.state;
        return (
            <div className="app">
                <AddColorForm />
                <ColorList colors={colors} />
            </div>
        )
    }
}