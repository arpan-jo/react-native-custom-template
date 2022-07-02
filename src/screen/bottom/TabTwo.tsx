import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TabTwo = () => {
  return (
    <View>
      <Text style={styles.num}>Two</Text>
    </View>
  );
};

export default TabTwo;

const styles = StyleSheet.create({
  num: {
    fontSize: 25,
    textAlign: 'center',
  },
});
