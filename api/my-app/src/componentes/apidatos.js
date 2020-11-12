import React from 'react';
import '../App.css';

class MostrarApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.',
      name: "",
      input:'Argentina',
      detalle: [],
    };
  }

  getCountryData = () => {
  fetch(`https://restcountries.eu/rest/v2/name/${this.state.input}`)
  .then(response => response.json())
  .then(detalleJson => this.setState({detalle: detalleJson[0]}))
  }
  componentDidMount(){
    this.getCountryData();
}

    handleChange = event => {
    const value = event.target.value;
    this.setState({
      input:value});
}

  handleReverse = event => {
    event.preventDefault();
    const text  = this.state.name;
    const dato = this.state.detalle.name;
    const dato5 = this.state.detalle.timezones;
    const dato1 = this.state.detalle.capital;
    const dato2 = this.state.detalle.region;
    const dato3 = this.state.detalle.borders;
    const dato4 = this.state.detalle.subregion;
    this.getCountryData();
    this.setState({
      reversedText:  " Pais: " + dato 
      + " | Capital: " +  dato1 
      + " | Region: " + dato2 
      + " | Fronteras: " + dato3 
      + " | Subregion: " + dato4 
      + " | Time Zones: " + dato5
    })
  }
   

 
  render() {
      console.log(this.props.prueba);
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