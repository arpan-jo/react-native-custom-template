import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TopTabTwo = () => {
  return (
    <View>
      <Text style={styles.num}>Two</Text>
    </View>
  );
};

export default TopTabTwo;

const styles = StyleSheet.create({
  num: {
    fontSize: 30,
    textAlign: 'center',
  },
});
