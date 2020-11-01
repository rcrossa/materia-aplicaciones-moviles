import React from 'react';
import '../App.css';

class MostrarApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.',
      name: ""      
    };
  }

  
  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/name/argentina')
    .then(response => response.json())
    .then(detalleJson => this.setState({detalle: detalleJson[0]}))
}

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      name: value
    });
  }

  handleReverse = event => {
    event.preventDefault();
    const text  = this.state.name;
    this.setState({
      reversedText:text
      .split("")
      .reverse()
      .join("")
    })
  }


  render() {
    return (
      <React.Fragment>
        { /* handleReverse() is called when the form is submitted */ }
        <form onSubmit={this.handleReverse}>
          <div>
            { /* Render input entered */}
            <label>Text: {this.state.input}</label>
          </div>
          <div>
           { /* handleChange() is triggered when text is entered */ }
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
              placeholder="Enter a text"
            />
          </div>
          <div>
            <button>Reverse Text</button>
          </div>
        </form>
        { /* Render reversed text */}
        <p>Reversed Text: {this.state.reversedText}</p>
      </React.Fragment>
    );
  }
}

export default MostrarApi;