import React, { Component } from 'react';

class Nim extends Component{
  constructor(props) {
    super(props)
    this.state = {
      barsCount: this.props.count,
      currentPlayer: 1
    }
  }

removeBars(amount, game){
  if (game = 1) {
    this.setState({
      barsCount: this.state.barsCount - amount,
      currentPlayer: 3 - this.state.currentPlayer
    })

  }
}

  render(){
    var game = 1
    var gameOver = ""
    if (this.state.barsCount < 2){
      game = 0
      var gameOver = "Player "+this.state.currentPlayer+" loose!"
    }
    var barsView = ""
    for(var i = 0; i < this.state.barsCount; i++ ){
      barsView += "|"
    }
    return(
      <div>
        <div id="stats">
        <p>Player <b>{this.state.currentPlayer}</b> it is your turn</p>
        </div>
        <div id="bars">{barsView} ({this.state.barsCount}) </div>
        <div id="buttons">
          <button onClick = {() =>{this.removeBars(1,{game})}}>1</button>
          <button onClick = {() =>{this.removeBars(2,{game})}}>2</button>
          <button onClick = {() =>{this.removeBars(3,{game})}}>3</button>
          <h1>{gameOver}</h1>
        </div>


      </div>



    )
  }
}
export default Nim;
