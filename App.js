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
    <View style={styles.container}>
    <Crud></Crud>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems:'flex-start',
  },
});
