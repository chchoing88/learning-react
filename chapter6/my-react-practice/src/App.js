import React , {Component} from 'react';
import PropTyeps from 'prop-types';
import './Star.css';
import {v4} from 'uuid';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: []
        }
        this.addColor = this.addColor.bind(this);
    }

    addColor(title, color){
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                colors,
                rating:0
            }
        ]
        this.setState({colors});
    }

    render() {
        const { colors } = this.state;
        return (
            <div className="app">
                <AddColorForm onNewColor={addColor}/>
                <ColorList colors={colors} />
            </div>
        )
    }
}