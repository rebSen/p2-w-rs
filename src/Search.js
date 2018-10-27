import React, { Component } from 'react'

export default class Search extends Component {
constructor(props) {
  super(props)
  this.state = {
      value:""
  };
}  
  
updateSearchField = event => {
  this.setState({
      value: event.target.value
    });
}  
render() {
  return (
     <div>
    
    <input 
        type="text" 
        search="email"
        onChange={this.updateSearchField}
        value={this.state.value}
        placeholder="Search Movie Title..."/>
        
  </div>
  )
}    
}


// <h1>{this.state.value || "tapez recherche ici e-mail ici :"} </h1>
//        className="searchbox__input typeahead form-control"

