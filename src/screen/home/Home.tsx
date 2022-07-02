import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Home = ({navigation}) => {
  // const route = useRoute();
  // console.log(route);
  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {backgroundColor: 'red', padding: 10},
});
