import React from 'react';
import '../App.css';

class MostrarApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.',
      name: "",
      url:'https://restcountries.eu/rest/v2/',
      detalle: [],
      numero:'1',
      loading: false
    };
  }
    
  componentDidMount(){
    this.getDetalle();
}

getDetalle =  (numero) => {
  this.setState({loading:true})
  fetch(this.state.url)
  .then(response => response.json())
  .then(detalleJson =>this.setState({detalle: detalleJson[this.state.numero]}))
  .catch(console.log('algo salio mal'));

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
    
  const date = this.state.detalle.name;
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
        <p>Reversed Text: {date}</p>

      </React.Fragment>
    );
  }
}

export default MostrarApi;