import React from 'react';
import '../App.css';
class Mostrar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            detalle: [],
            isFetch: true,
        }
    }
    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/name/argentina')
        .then(response => response.json())
        .then(detalleJson => this.setState({detalle: detalleJson[0], isFetch: false}))
    }
    render(){
        if(this.state.isFetch){
            return 'Loading..'
        }else{
            
        const dato1=this.state.detalle.name
        const dato2=this.state.detalle.capital
        const dato3=this.state.detalle.region
        const dato4=this.state.detalle.timezones
     
        return <div>
            <h1 className="dato1">{dato1}</h1>
            <h2 className="dato2">{dato2}</h2>
            <h3 className="dato3">{dato3}</h3>
            <h4 className="dato4">{dato4}</h4>
        </div>
        }
    }
}

export default Mostrar;