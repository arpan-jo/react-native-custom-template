import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TopTabOne = () => {
  return (
    <View>
      <Text style={styles.num}>One</Text>
    </View>
  );
};

export default TopTabOne;

const styles = StyleSheet.create({
  num: {
    fontSize: 30,
    textAlign: 'center',
  },
});
