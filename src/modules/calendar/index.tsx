import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
const CustomCalendarPicker = (props: any) => {
  const {dateTextStyle} = props;
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState<any>(moment());

  const onChange = (e: any, selectedDate: any) => {
    setDate(selectedDate);
  };
  return (
    <View>
      <Text onPress={() => setShow(true)} style={dateTextStyle}>
        {moment().format('DD-MMMM-YYYY')}
      </Text>
      <Modal
        visible={show}
        transparent={true}
        animationType="slide"
        supportedOrientations={['portrait']}
        onRequestClose={() => setShow(false)}>
  
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-end',
              flexDirection: 'row',
            }}
            activeOpacity={0.6}
            onPress={() => setShow(!show)}>
            <DateTimePicker
              value={new Date()}
              mode='date'
              minimumDate={
                new Date(moment().subtract(120, 'years').format('YYYY-MM-DD'))
              }
              maximumDate={new Date(moment().format('YYYY-MM-DD'))}
              // onChange={onChange}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default CustomCalendarPicker;

const styles = StyleSheet.create({
  CalendarStyle: {
    borderRadius: vw(10),
    elevation: 5,
    marginTop: vh(100),
    padding: vh(20),
    marginHorizontal: vw(20),
    backgroundColor: 'grey',
  },
  dateTextStyle: {},
});
