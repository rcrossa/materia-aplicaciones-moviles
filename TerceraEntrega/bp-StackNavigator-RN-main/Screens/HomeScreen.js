import React, {Component} from 'react';
import {View, TextInput, Text, Button} from "react-native";
import {StyleSheet} from "react-native";

export class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {text:'ejemplo', detalle:[],input:'argentina'}
    }
    getCountryData = () => {
        fetch(`https://restcountries.eu/rest/v2/name/${this.state.input}`)
        .then(response => response.json())
        .then(detalleJson => this.setState({detalle: detalleJson[0]}))
        }
        componentDidMount(){
          this.getCountryData();
      }

    handlerTextInput(text){
       
        
        const dato = this.state.detalle.name;
        const dato5 = this.state.detalle.timezones;
        const dato1 = this.state.detalle.capital;
        const dato2 = this.state.detalle.region;
        const dato3 = this.state.detalle.borders;
        const dato4 = this.state.detalle.subregion;
        this.getCountryData();
        // this.setState({text: text});
        this.setState({
            input:text,
            text: " Pais: " + dato 
            + " | Capital: " +  dato1 
            + " | Region: " + dato2 
            + " | Fronteras: " + dato3 
            + " | Subregion: " + dato4 
            + " | Time Zones: " + dato5
        });

    }

    handlerBtn(){
        this.props.navigation.navigate("Details", {
            text: this.state.text
        });
    }

    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Escribi algo"
                    onChangeText={text => this.handlerTextInput(text)}
                />

                <Button title="Pasar a detalles" onPress={() => this.handlerBtn()}>
                </Button>
            </View>
        );
    }

  }

  const styles = StyleSheet.create({
    textInput: {
        height:50,
        width:"80%",
        backgroundColor:"green"
    }
  });
