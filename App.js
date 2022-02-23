import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Converter from './Converter/converter.js';
import Counter from './Counter/counter.js';
import FlightBooker from './FlightBooker/flightbooker.js';
import Timer from './Timer/timer.js';
import Crud from './CRUD/crud.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Counter</Tab>
        <Tab>Degree Converter</Tab>
        <Tab>Flight Booker</Tab>
        <Tab>Timer</Tab>
        <Tab>CRUD</Tab>
      </TabList>
      <TabPanel>
        <Counter></Counter>
      </TabPanel>
      <TabPanel>
        <Converter></Converter>
      </TabPanel>
      <TabPanel>
        <FlightBooker></FlightBooker>
      </TabPanel>
      <TabPanel>
        <Timer></Timer>
      </TabPanel>
      <TabPanel>
        <Crud></Crud>
      </TabPanel>
    </Tabs>
    // <View style={styles.container}>
    //   <Counter></Counter>
    //   <Converter></Converter>
    //   <FlightBooker></FlightBooker>
    //   <Timer></Timer>
    //   <Crud></Crud>
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems:'flex-start',
  },
});
