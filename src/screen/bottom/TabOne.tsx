import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TabOne = () => {
  return (
    <View>
      <Text style={styles.num}>One</Text>
    </View>
  );
};

export default TabOne;

const styles = StyleSheet.create({
  num: {
    fontSize: 25,
    textAlign: 'center',
  },
});
