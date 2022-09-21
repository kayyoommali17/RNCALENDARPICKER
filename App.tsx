import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppTest from './test';
import CustomCalendarPicker from './src/components/calendar';
import OrderSummary from './src/components/orderSummary';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <CustomCalendarPicker
        height={500}
        textStyle={{color: 'red'}}
        previousTitle={'back'}
      />
      {/* <OrderSummary /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
