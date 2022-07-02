import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootStackParamList} from '../../navigation/RootNavigation';
import {RootState} from '../../redux/store';

type Props = NativeStackScreenProps<RootStackParamList>;

const Explore = ({navigation}: Props) => {
  const {
    auth: {name},
  } = useSelector((state: RootState): RootState => state);

  console.log('auth', name);

  return (
    <View>
      <Text>Explore</Text>
      <TouchableOpacity onPress={() => navigation.navigate('User')}>
        <Text>Go To User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
