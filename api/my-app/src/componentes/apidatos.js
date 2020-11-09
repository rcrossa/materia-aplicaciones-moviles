import React from 'react';
import '../App.css';

class MostrarApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.',
      value1:'',
      name: "",
      detalle: [],
      numero:'',
      pais:'Argentina',
      url:'https://restcountries.eu/rest/v2/name/',
      loading: false
    };
  }
    
  componentDidMount(){
    fetch('url'+'pais')
    .then(response => response.json())
    .then(detalleJson => this.setState({detalle: detalleJson[0], isFetch: false}))
}

// getDetalle =  (numero) => {
//   this.setState({loading:true})
//   fetch(this.state.url)
//   .then(response => response.json())
//   .then(detalleJson =>this.setState({detalle: detalleJson[0]}))
//   .catch(console.log('algo salio mal'));

// }

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      name: value
    });
  }
  handleChange1 = event => {
  const value1 = event.target.value1;
    this.setState({
      name1: value1
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
  handleReverse1 = event => {
    event.preventDefault();
    const text  = this.state.name;
    this.setState({
      reversedText1:text
      .split("")
      .reverse()
      .join("")
    })
  }
 
  render() {
    const date = this.state.detalle;
    const dato = (value1) =>{
      date.filter(this.state.detalle.name);
    }
    const date1 = this.state.detalle.argentina;
  
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
        <form onSubmit={this.handleReverse1}>
          <div>
            { /* Render input entered */}
            <label>Text1: {this.state.input1}</label>
          </div>
          <div>
           { /* handleChange() is triggered when text is entered */ }
            <input
              type="text"
              value={this.state.input1}
              onChange={this.handleChange.value1}
              placeholder="Enter a text1"
            />
          </div>
          <div>
            <button>Reverse Text</button>
          </div>
        </form>
        { /* Render reversed text */}
        <p>Reversed Text: {this.state.reversedText}</p>
        <p>Reversed Text: {}</p>

      </React.Fragment>
    );
  }
}

export default MostrarApi;