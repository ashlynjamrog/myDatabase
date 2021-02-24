import React from "react";
import { View, Text, TextInput } from "react-native";
import converterStyles from "./styles"

export default class Converter extends React.Component {
    constructor() {
        super();
        this.state = {
            fahrenheit: '32',
            celsius: '0'
        }

        this.fahrenheitChanged = this.fahrenheitChanged.bind(this);
        this.celsiusChanged = this.celsiusChanged.bind(this);
    }

    fahrenheitChanged(newFahrenheit) {
        const newCelsius = ((newFahrenheit - 32) * (5 / 9)).toString();
        this.setState({fahrenheit: newFahrenheit, celsius: newCelsius});
    }

    celsiusChanged(newCelsius) {
        const newFahrenheit = (newCelsius * (9 / 5) + 32).toString();
        this.setState({celsius: newCelsius, fahrenheit: newFahrenheit});
    }

    render() {
        return (
            <View style={converterStyles.displayBox}>
                <Text style={converterStyles.title}>Temperature Converter</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TextInput 
                        style={converterStyles.inputBox} 
                        onChangeText={this.fahrenheitChanged} 
                        value={this.state.fahrenheit}
                        keyboardType='numeric'/>
                    <Text style={converterStyles.temperatureText}>&nbsp;Fahrenheit =&nbsp;</Text>
                    <TextInput 
                        style={converterStyles.inputBox} 
                        onChangeText={this.celsiusChanged} 
                        value={this.state.celsius}
                        keyboardType='numeric'/>
                    <Text style={converterStyles.temperatureText}>&nbsp;Celsius</Text>
                </View>
            </View>
        );
    }
}
