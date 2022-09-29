import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  TurboModuleRegistry,
  MaskedViewComponent,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {normalize} from './src/utils/dimension';

export default function AppTest() {
  const [modal, setModal] = useState<boolean>(false);
  const spacing = 20;
  const padding = 10;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'powderblue',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 30,
      }}>
      <TouchableOpacity
        onPress={() => {
          setModal(true);
        }}
        style={{
          margin: spacing * 2,
          padding: padding,
          borderRadius: 10,
          width: 200,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            alignSelf: 'center',
          }}>
          {'Show Calendar'}
        </Text>
      </TouchableOpacity>
      <Modal visible={true} animationType="fade">
        <Calendar
          style={{
            borderRadius: 10,
            elevation: 5,
            margin: spacing * 1.5,
            padding: spacing * 1.2,
            backgroundColor: 'grey',
          }}
          onDayPress={date => {
            console.log(date);
            setModal(false);
          }}
          initialDate="2022-09-10"
          minDate="2000-04-11"
          maxDate="2022-12-31"
          hideExtraDays={true}
          hideArrows={false}
          hideDayNames={false}
          //   markedDates={{
          //     '2022-09-10': {marked: true, dotColor: 'red', selected: true},
          //     '2022-10-10': {
          //       marked: true,
          //       dotColor: 'red',
          //       selected: true,
          //       selectedColor: '#234489',
          //       selectedTextColor: 'aqua',
          //     },
          //   }}
          //   markingType={'multi-dot'}
          //   markedDates={{
          //     '2022-11-11': {
          //       dots: [{color: 'red'}, {color: 'purple'}],
          //       selected: true,
          //       selectedColor: 'lightblue',
          //       selectedTextColor: 'black',
          //     },
          //   }}

          // @ Periods
          markingType="period"
          markedDates={{
            '2022-09-12': {startingDay: true, color: 'yellow'},
            '2022-09-13': {
              marked: true,
              color: 'yellow',
              dotColor: 'transparent',
            },
            '2022-09-14': {
              marked: true,
              color: 'yellow',
              dotColor: 'transparent',
            },
            '2022-09-15': {
              marked: true,
              color: 'yellow',
              dotColor: 'transparent',
            },
            '2022-09-16': {endingDay: true, color: 'yellow'},
          }}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
