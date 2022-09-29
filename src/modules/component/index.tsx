import moment from 'moment';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

interface CalendarProps {
  height?: number;
  width?: number;
  selectedDayColor?: string;
  todayBackgroundColor?: string;
  selectedDayTextColor?: string;
}

const CustomRangeDatePicker = (props: CalendarProps) => {
  const {
    height = 200,
    width = 200,
    todayBackgroundColor,
    selectedDayColor,
    selectedDayTextColor,
  } = props;
  const minDate = new Date(); // Today
  const maxDate = new Date(2060, 6, 3); //max future date
  const [selectedEndDate, setselectedEndDate] = useState<any>('');
  const [selectedStartDate, setselectedStartDate] = useState<any>('');
  const endDate = selectedEndDate ? selectedEndDate.toString() : '';
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  const onDateChange = (date: any, type: any) => {
    if (type === 'END_DATE') {
      setselectedEndDate(date);
    } else {
      setselectedStartDate(date);
    }
  };
  return (
    <View style={styles.container}>
      <CalendarPicker
        // {...rest}
        width={width}
        height={height}
        minDate={minDate}
        maxDate={maxDate}
        // nextTitle={}
        startFromMonday={true}
        allowRangeSelection={true}
        selectedDayColor={selectedDayColor}
        todayBackgroundColor={todayBackgroundColor}
        selectedDayTextColor={selectedDayTextColor}
        textStyle={{
          color: '#000000',
          fontFamily: 'Cochin',
        }}
        onDateChange={onDateChange}
        // selectedRangeStyle={{
        //   backgroundColor: 'red',
        // }}
      />

      <View>
        <Text>
          SELECTED START DATE: {moment(startDate).format('DD-MM-YYYY')}
        </Text>
        <Text>SELECTED END DATE: {moment(endDate).format('DD-MM-YYYY')}</Text>
      </View>
    </View>
  );
};

export default CustomRangeDatePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
});
