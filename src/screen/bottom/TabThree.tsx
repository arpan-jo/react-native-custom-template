import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TabThree = () => {
  return (
    <View>
      <Text style={styles.num}>Three</Text>
    </View>
  );
};

export default TabThree;

const styles = StyleSheet.create({
  num: {
    fontSize: 25,
    textAlign: 'center',
  },
});
