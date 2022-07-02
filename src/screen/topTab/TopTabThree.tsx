import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TopTabThree = () => {
  return (
    <View>
      <Text style={styles.num}>Three</Text>
    </View>
  );
};

export default TopTabThree;

const styles = StyleSheet.create({
  num: {
    fontSize: 30,
    textAlign: 'center',
  },
});
