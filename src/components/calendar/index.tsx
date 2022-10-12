import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
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
    disabledDates,
    previousTitle,
    nextComponent,
    yearTitleStyle,
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
    onDateChange,
    onMonthChange,
    modal,
    setModal,
  } = props;

  const _onPressOk = () => {
    setModal(!modal);
  };
  return (
    <View style={[styles.container, {height: height, width: width}]}>
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

      <TouchableOpacity onPress={_onPressOk}>
        <Text style={styles.okTextStyle}>{'Ok'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCalendarPicker;

const styles = StyleSheet.create({
  container: {
    height: 350,
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
  okTextStyle: {
    color: colors.black,
    alignSelf: 'flex-end',
    right: 15,
    fontSize: 18,
    fontWeight: '400',
  },
});
