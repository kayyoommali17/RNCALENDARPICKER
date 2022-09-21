import React, {useState} from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import {normalize} from '../../utils/dimension';

interface CalendarProps {
  height?: number | undefined; // height of the calendar
  width?: number | undefined; // width of the calendar
  selectedStartDate?: Date | undefined; // specifies a selected Start Date.
  selectedEndDate?: Date | undefined; // specifies a selected End Date.
  textStyle?: TextStyle | undefined; // style overall text
  maxDate?: Date | undefined; // max Date of the calendar
  minDate?: Date | undefined; // min Date of the calendar
  todayBackgroundColor?: string | undefined; // color of today day
  startFromMonday?: boolean | undefined; // days start with monday
  allowRangeSelection?: boolean | undefined; // allow to select day range
  selectedDayColor?: boolean | undefined; // Color for selected day
  nextTitle?: string | undefined; //  Title of button for next month
  previousTitle?: string | undefined; //  Title of button for previous month
  selectedDayTextColor?: string | undefined; // Text color for selected day
  showDayStragglers?: boolean | undefined; // previous & next month days in empty slots
  scaleFactor?: number | undefined; // default scale to window width
  monthTitleStyle?: string | undefined; // color of the Month Title
  yearTitleStyle?: string | undefined; // color of the Year Title
}

const CustomCalendarPicker = (props: CalendarProps) => {
  const {height, textStyle, previousTitle} = props;
  const [selectedEndDate, setselectedEndDate] = useState<any>('');
  const [selectedStartDate, setselectedStartDate] = useState<any>('');
  const minDate = new Date(); // Today Date
  const maxDate = new Date(2060, 6, 3); //Max Future Date
  const startDate = selectedStartDate ? selectedStartDate : moment(new Date());
  const endDate = selectedEndDate ? selectedEndDate : 'DD-MM-YYYY';
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
        height={height}
        startFromMonday={true}
        allowRangeSelection={true}
        minDate={minDate}
        maxDate={maxDate}
        monthTitleStyle={{color: '#000000'}}
        yearTitleStyle={{color: '#000000'}}
        todayBackgroundColor="#e6ffe6"
        selectedDayColor="#7300e6"
        nextTitle=">"
        showDayStragglers={false}
        selectedDayTextColor="#000000"
        scaleFactor={375}
        previousTitle="<"
        textStyle={{
          fontFamily: 'Cochin',
          color: '#000000',
        }}
        onDateChange={onDateChange}
      />

      <View style={styles.selectedTextView}>
        <Text style={textStyle}>
          START DATE:{moment(startDate).format('DD-MM-YYYY')}
        </Text>
        <Text style={textStyle}>
          END DATE:{moment(endDate).format('DD-MM-YYYY')}
        </Text>
      </View>
    </View>
  );
};

export default CustomCalendarPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 60,
  },
  selectedTextView: {
    marginLeft: normalize(20),
    marginTop: normalize(15),
  },
});
