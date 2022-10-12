import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomCalendarPicker from './src/components/calendar';
import {colors} from './src/utils/color';
import {normalize} from './src/utils/dimension';
import {images} from './src/utils/images';
import Modal from 'react-native-modal';
import moment from 'moment';

export default function App() {
  const minDate = new Date(); // Today Date
  const maxDate = new Date(2060, 6, 3); //Max Future Date
  const [modal, setModal] = React.useState(false);
  const [selectedEndDate, setselectedEndDate] = React.useState<any>('');
  const [selectedStartDate, setselectedStartDate] = React.useState<any>('');
  const endDate = selectedEndDate ? selectedEndDate : moment(new Date());
  const startDate = selectedStartDate ? selectedStartDate : moment(new Date());
  const onDateChange = (date: any, type: any) => {
    if (type === 'END_DATE') {
      setselectedEndDate(date);
    } else {
      setselectedStartDate(date);
    }
  };

  const _onPress = () => {
    setModal(!modal);
  };
  return (
    <View style={styles.container}>
      <Modal animationIn={'fadeIn'} isVisible={modal}>
        <CustomCalendarPicker
          height={350}
          width={360}
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
          modal={modal}
          setModal={setModal}
          onDateChange={onDateChange}
        />
      </Modal>
      <TouchableOpacity style={styles.calendarTouchable} onPress={_onPress}>
        <Image
          style={styles.calendarImg}
          source={images.calendar}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.selectedTextView}>
        <Text>{moment(startDate).format('DD-MM-YYYY')}</Text>
        <Text>{moment(endDate).format('DD-MM-YYYY')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedTextView: {
    marginLeft: normalize(10),
    marginTop: normalize(10),
  },
  calendarImg: {
    height: normalize(30),
    width: normalize(30),
  },
  modalStyle: {
    height: normalize(100),
  },
  calendarTouchable: {
    marginTop: normalize(40),
    marginLeft: normalize(30),
  },
});
