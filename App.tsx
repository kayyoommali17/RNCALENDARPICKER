import {SafeAreaView} from 'react-native';
import React from 'react';
import CustomRangeDatePicker from './src/modules/component';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomRangeDatePicker
        height={400}
        width={400}
        selectedDayColor={'#7300e6'}
        todayBackgroundColor={'#e6ffe6'}
        selectedDayTextColor={'#000000'}
      />
    </SafeAreaView>
  );
}
