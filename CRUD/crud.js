import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View , TextInput, TouchableHighlight, ItemSeparatorComponent} from "react-native";
import crudStyles from "./styles";

export default class Crud extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ["a", "b", "c", "d", "ashlyn"],
            selected: "a",
            name: ""
    }

}

/* */

highlight(item) {
  //alert("Highlighting " + item);
  var actualData = this.state.data
  this.setState({
    selected: item
  });
  // var str = "String is ";
  // actualData.map(item => {str = str + item + " "});
  // alert(str);
  this.setState({ data: null }, () => { this.setState({ data: actualData }) });
}

nameChange(value) {
  this.setState({name: value});
}
create = async(name) => {
  //const name= this.state.name;
  if (name != "") {
    name.split(' ');
    var actualData = this.state.data.concat(name);
    await this.setState({ data: null }, () => { this.setState({ data: actualData }) });
    
    this.highlight(name);
  }
}
delete = async(name) => {
  if (name != "") {
    name.split(' ');
    var actualData = this.state.data;
    var index = actualData.indexOf(name);
    if (index !== -1) { //found
      actualData.splice(index, 1);
      await this.setState({ data: null }, () => { this.setState({ data: actualData }) });
    }
  }
}

update = async(name) => {
  if (name != "") {
    name.split(' ');
    var actualData = this.state.data;
    var index = actualData.indexOf(this.state.selected);
    if(index !== -1) {  //found
      actualData.splice(index, 1, name);
      await this.setState({ data: null }, () => { this.setState({ data: actualData, selected: name}) });
    }
  }
}

filter = async(name) => {
  if (name != "") {
    name.split(' ');
    var actualData = this.state.data;
    //alert(name);
    //var found = actualData.find(element => element.indexOf(name));
    let filteredData = actualData.filter(x => String(x).includes(name));
    //alert(filteredData);
    if (filteredData != null) {
      await this.setState({ data: null }, () => { this.setState({ data: actualData, selected: filteredData[0]}) });
    }
  }
}

    render () {
        return (
            <View style={crudStyles.displayBox}>
                <Text style={crudStyles.title}>CRUD</Text>
                <View style={crudStyles.left}>
                    <View style={{ padding: 5}}>
                    <Text>Filter:</Text>
                    <TextInput style={crudStyles.display} onChangeText={(txt) => this.filter(txt)}></TextInput>
                    </View>
                    <br></br>
                    <View style={{ padding: 5}}>
                    <Text>Name:</Text>
                    <TextInput onChangeText={(txt) => this.nameChange(txt)} style={crudStyles.display}></TextInput>
                    </View>
                </View>
            <View style={crudStyles.listBox}>
            <FlatList
                    data={this.state.data}
                    renderItem={({item}) => <TouchableOpacity style={(item == this.state.selected) ? crudStyles.select : crudStyles.item} onPress={()=> {this.highlight(item)}}>{item}</TouchableOpacity>}
                    
                />
</View>
                
<View style={{flexDirection:'row', padding: 5, justifyContent:'center'}}>
    <View style={{paddingRight: 5}}>
      <TouchableOpacity
        style={crudStyles.inputBox}
        onPress={() => {this.create(this.state.name)}}
      >
        <Text style={{textAlign:'center', color:'white'}}>Create</Text>
      </TouchableOpacity>
    </View>
    <View style={{paddingLeft: 5}}>
      <TouchableOpacity
        style={crudStyles.inputBox}
        onPress={() => {this.delete(this.state.selected)}}
      >
        <Text style={{textAlign:'center', color: 'white'}}>Delete</Text>
      </TouchableOpacity>
      </View>
      <View style={{paddingLeft: 10}}>
      <TouchableOpacity
        style={crudStyles.inputBox}
        onPress={() => {this.update(this.state.name)}}
      >
        <Text style={{textAlign:'center', color: 'white'}}>Update</Text>
      </TouchableOpacity>
      </View>
      </View>
      
</View>
        );
        }
}