import React, { Component } from 'react';
import {v4} from 'uuid';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import '../stylesheets/App.scss'

class App extends Component {
  constructor(){
    super();
    this.state = {
      colorList: []
    }

    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
  }
  
  addColor(title, color){
    this.setState(prevState => ({
      colorList: [
        ...prevState.colorList,
        {
          id: v4(),
          title,
          color,
          rating: 0,
        }
      ]
    }))
  }

  removeColor(id){
    
    const {colorList} = this.state;
    this.setState({
      colorList: colorList.filter( color => 
        color.id !== id
      )
    });
  }

  rateColor(id, rating) {
    this.setState(prevState => ({
      colorList: prevState.colorList.map( color => 
        (color.id === id) ? 
         {
          ...color,
          rating
         } : 
        color
      )
    }));

  }


  render() {
    const { colorList } = this.state;
    return (
      <div>
        
        <AddColorForm onNewColor={this.addColor} /> 
        <ColorList colorList={colorList}
          onRemove={this.removeColor}
          onRating={this.rateColor}
        />
      </div>
    );
  }
}

export default App;
