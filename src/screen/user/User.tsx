import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootNavigation';

type Props = NativeStackScreenProps<RootStackParamList>;

const User = ({navigation}: Props) => {
  return (
    <View>
      <Text>User</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.btn}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
  },
});
