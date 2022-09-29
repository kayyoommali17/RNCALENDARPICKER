import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import StepIndicator from 'react-native-step-indicator';
import {normalize} from '../../utils/dimension';

const labels = [
  'Cart',
  'Delivery Address',
  'Order Summary',
  'Payment Method',
  'Track',
];

const {width, height} = Dimensions.get('window');
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#ff3444',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#ff3444',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#ff3444',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#ff3444',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#ff3444',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  // currentStepLabelColor: '#ff3444',
};

export default function OrderSummary() {
  const [currentPosition, setCurrentPosition] = React.useState<any>(0);
  const nextStep = () => {
    setCurrentPosition(currentPosition + 1);
  };
  const data = [
    {
      label: 'Order and Approved',
      status: 'Your order has been placed',
      dateTime: 'Sat, 3rd Nov 10:23am',
    },
    {
      label: 'Packed',
      status: 'Your item has been placed',
      dateTime: 'Sun, 4th Nov 2:34pm',
    },
    {
      label: 'Shipped',
      status: 'Your item has been shipped',
      dateTime: 'Mon, 5th Nov 3:43pm',
    },
    {
      label: 'Out for Delivery',
      status: 'Your item is out for delivery',
      dateTime: 'Tue, 6th Nov 10:10am',
    },
    {
      label: 'Delivered',
      status: 'Your item has been delivered',
      dateTime: 'Tue 6th Nov 12:20pm',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle={'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.headerText}>{'Order Summary'}</Text>
      </View>
      <View style={styles.indicatorContainer}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          direction="vertical"
          renderLabel={({position, stepStatus, label, crntPosition}: any) => {
            return (
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{data[position].label}</Text>
                <Text style={[styles.statusText, {marginTop: normalize(7)}]}>
                  {data[position].status}
                </Text>
                <Text style={styles.statusText}>{data[position].dateTime}</Text>
              </View>
            );
          }}
        />
        <TouchableOpacity style={styles.nextBtn} onPress={() => nextStep()}>
          <Text style={styles.nextText}>{'Next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  header: {
    height: normalize(65),
    padding: normalize(10),
    width: '100%',
    elevation: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  headerText: {
    color: '#ff3444',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: normalize(15),
  },
  indicatorContainer: {
    height: height - 150,
    width: width - 30,
    padding: 20,
    margin: 15,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: '#000',
  },
  labelContainer: {
    marginTop: normalize(40),
    padding: normalize(10),
    paddingLeft: normalize(5),
    width: width - 100,
  },
  labelText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 15,
    color: 'grey',
  },
  nextBtn: {
    alignSelf: 'flex-end',
  },
  nextText: {
    color: '#ff3444',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
