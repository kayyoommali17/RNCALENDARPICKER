import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import {normalize} from '../../utils/dimension';
import {CalendarProps} from '../../utils/types';
import {colors} from '../../utils/color';
const CustomCalendarPicker = (props: CalendarProps) => {
  const {
    height = 400,
    width = 300,
    months,
    minDate,
    maxDate,
    weekdays,
    dayShape,
    nextTitle,
    textStyle,
    horizontal,
    scrollable,
    scaleFactor,
    initialDate,
    headingLevel,
    endDateTitle,
    disabledDates,
    previousTitle,
    nextComponent,
    yearTitleStyle,
    startDateTitle,
    todayTextStyle,
    selectYearTitle,
    monthTitleStyle,
    startFromMonday,
    dayLabelsWrapper,
    selectMonthTitle,
    enableDateChange,
    minRangeDuration,
    selectedDayColor,
    maxRangeDuration,
    selectedDayStyle,
    previousComponent,
    showDayStragglers,
    previousTitleStyle,
    selectedRangeStyle,
    allowRangeSelection,
    todayBackgroundColor,
    selectedDayTextStyle,
    selectedDayTextColor,
    selectedRangeEndStyle,
    disabledDatesTextStyle,
    selectedRangeStartStyle,
    restrictMonthNavigation,
    allowBackwardRangeSelect,
    selectedRangeEndTextStyle,
    selectedRangeStartTextStyle,
    selectedDisabledDatesTextStyle,
    onMonthChange,
  } = props;
  const [selectedEndDate, setselectedEndDate] = useState<any>('');
  const [selectedStartDate, setselectedStartDate] = useState<any>('');
  const endDate = selectedEndDate ? selectedEndDate : moment(new Date());
  const startDate = selectedStartDate ? selectedStartDate : moment(new Date());
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
        width={width}
        height={height}
        months={months}
        maxDate={maxDate}
        minDate={minDate}
        weekdays={weekdays}
        dayShape={dayShape}
        nextTitle={nextTitle}
        textStyle={textStyle}
        horizontal={horizontal}
        scrollable={scrollable}
        initialDate={initialDate}
        scaleFactor={scaleFactor}
        headingLevel={headingLevel}
        onDateChange={onDateChange}
        onMonthChange={onMonthChange}
        disabledDates={disabledDates}
        nextComponent={nextComponent}
        previousTitle={previousTitle}
        yearTitleStyle={yearTitleStyle}
        todayTextStyle={todayTextStyle}
        startFromMonday={startFromMonday}
        monthTitleStyle={monthTitleStyle}
        selectYearTitle={selectYearTitle}
        minRangeDuration={minRangeDuration}
        maxRangeDuration={maxRangeDuration}
        selectedDayStyle={selectedDayStyle}
        enableDateChange={enableDateChange}
        selectMonthTitle={selectMonthTitle}
        selectedDayColor={selectedDayColor}
        dayLabelsWrapper={dayLabelsWrapper}
        showDayStragglers={showDayStragglers}
        previousComponent={previousComponent}
        previousTitleStyle={previousTitleStyle}
        selectedRangeStyle={selectedRangeStyle}
        allowRangeSelection={allowRangeSelection}
        selectedDayTextColor={selectedDayTextColor}
        todayBackgroundColor={todayBackgroundColor}
        selectedDayTextStyle={selectedDayTextStyle}
        selectedRangeEndStyle={selectedRangeEndStyle}
        disabledDatesTextStyle={disabledDatesTextStyle}
        restrictMonthNavigation={restrictMonthNavigation}
        selectedRangeStartStyle={selectedRangeStartStyle}
        allowBackwardRangeSelect={allowBackwardRangeSelect}
        selectedRangeEndTextStyle={selectedRangeEndTextStyle}
        selectedRangeStartTextStyle={selectedRangeStartTextStyle}
        selectedDisabledDatesTextStyle={selectedDisabledDatesTextStyle}
      />
      <View style={styles.selectedTextView}>
        <Text style={styles.textStyleColor}>
          {startDateTitle ? startDateTitle : 'START DATE: '}
          {moment(startDate).format('DD-MM-YYYY')}
        </Text>
        <Text style={styles.textStyleColor}>
          {endDateTitle ? endDateTitle : 'END DATE: '}
          {moment(endDate).format('DD-MM-YYYY')}
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
    marginTop: '10%',
  },
  selectedTextView: {
    marginLeft: normalize(20),
    marginTop: normalize(15),
  },
  textStyleColor: {
    color: colors.black,
  },
});
