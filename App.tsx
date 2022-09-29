import {View} from 'react-native';
import React from 'react';
import CustomCalendarPicker from './src/components/calendar';
import {colors} from './src/utils/color';

export default function App() {
  const minDate = new Date(); // Today Date
  const maxDate = new Date(2060, 6, 3); //Max Future Date
  return (
    <View style={{flex: 1}}>
      <CustomCalendarPicker
        height={500}
        width={390}
        minDate={minDate}
        maxDate={maxDate}
        nextTitle={'>'}
        previousTitle={'<'}
        todayBackgroundColor={colors.lightGreen}
        selectedDayTextColor={colors.black}
        monthTitleStyle={{color: colors.black}}
        yearTitleStyle={{color: colors.black}}
        startFromMonday={true}
        allowRangeSelection={true}
        allowBackwardRangeSelect={true}
        selectedDayColor={colors.violet}
        restrictMonthNavigation={true}
        scaleFactor={375}
        showDayStragglers={true}
        textStyle={{
          fontFamily: 'Cochin',
          color: colors.black,
        }}
      />
    </View>
  );
}
