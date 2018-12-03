import React, { Component } from 'react';
import './index.css';

class Card extends Component{
  render (){
    return(


<div class="demo-card-square mdl-card mdl-shadow--2dp" background1-color = '#010000'>
  <div class="mdl-card__title mdl-card--expand" >
    <h2 class="mdl-card__title-text">{this.props.title}</h2>
  </div>
  <div class="mdl-card__supporting-text">
  {this.props.children}
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      View Updates
    </a>
  </div>
</div>

    )
  }
}

export default Card;
