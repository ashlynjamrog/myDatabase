import React, { useState } from "react";
import { Picker, Text, TouchableOpacity, View , TextInput} from "react-native";
import flightStyles from "./styles";


export default class FlightBooker extends React.Component {
    constructor() {
        super();
        this.state = {
            flight: 'one-way flight',
            start: '2020-11-17',
            end: '2020-11-18',
            blur: true,
            bookblur: false,
        }
        this.onChange = this.onChange.bind(this);
        this.book = this.book.bind(this);
    }

    onChange() {
        if (this.state.flight == "one-way flight"){
            this.setState({flight: "return flight"});
            this.setState({blur: false});
            
        }
        else {
            this.setState({flight: "one-way flight"}); 
            this.setState({blur: true});  
        }
    }
    setStart(newDate) {
        this.setState({start: newDate.toString()});
    }

    setEnd(newDate) {
      var nextDate = newDate.replace(/-/g, "");
      var startDate = this.state.start.replace(/-/g, "");
      if (nextDate >= startDate) {
        this.setState({bookblur: false})
      }
      else {
        this.setState({bookblur: true})
      }
      //console.log("book blur: " + this.state.bookblur.toString())
      this.setState({end: newDate.toString()});
    }

    book () {
      if (!this.state.bookblur) {

      if (this.state.blur) {
        alert("You've booked a one way flight on " + this.state.start.toString() + "! Happy Flying!");
      }
      else {
        alert("You've booked a round trip flight departing on " + this.state.start.toString() + " and arriving on " + this.state.end.toString() + "! Happy Flying!");
      }
      }
      else {
        alert("Unable to book");
      }
    }
      render () {
      return (
        <View style={flightStyles.displayBox}>
          <Text style={flightStyles.title}>Flight Booker</Text>
          <Picker
        selectedValue={this.state.flight}
        style={flightStyles.display}
        onValueChange={this.onChange}
      >
        <Picker.Item label="one-way flight" value="one-way flight" />
        <Picker.Item label="return flight" value="return flight" />
      </Picker>
      <Text>Start Date:</Text>
      <TextInput 
        style={flightStyles.display} 
        onChangeText={text => this.setStart(text)} 
        value={this.state.start}
        />
        <Text>Return Date:</Text>
        <TextInput 
        style={this.state.blur ? flightStyles.displaydisabled : flightStyles.display}
        onChangeText={text => this.setEnd(text)} 
        value={this.state.end}
        editable={!this.state.blur}
        />
        <TouchableOpacity
        style={flightStyles.inputBox}
        onPress={this.book}
        disabled={this.state.bookblur && !this.state.book}
      >
        <Text style={{textAlign:'center', color: 'white'}}>Book</Text>
      </TouchableOpacity>
      </View>
      );
      }
}