import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {clearUser} from '../redux/authSlice';

const iconProps = {
  color: '',
  size: 0,
  focused: false,
};

const CustomDrawer =
  //@ts-ignore
  props => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return (
      <View>
        <Drawer.Section>
          {props.state.routes.map(
            (route: {key: number; name: string}, i: number) => {
              return (
                <Drawer.Item
                  key={route.key}
                  active={props?.state?.index === i}
                  label={
                    props?.descriptors[route?.key]?.options?.title ||
                    route?.name
                  }
                  icon={() => (
                    <Icon
                      name={props.descriptors[route.key].options.drawerIcon?.(
                        iconProps || undefined,
                      )}
                      size={22}
                      color="red"
                    />
                  )}
                  onPress={() => props?.navigation?.navigate(route?.name)}
                />
              );
            },
          )}
        </Drawer.Section>
        <Drawer.Section>
          <View style={styles.logOut}>
            <Icon name="logout" size={25} color="red" />
            <TouchableOpacity
              onPress={() => {
                dispatch(clearUser());
                //@ts-ignore
                navigation.navigate('Login');
              }}>
              <Text style={styles.btnTxt}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </Drawer.Section>
      </View>
    );
  };

export default CustomDrawer;

const styles = StyleSheet.create({
  logOut: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 18,
  },
  btnTxt: {
    paddingLeft: 30,
    fontWeight: '600',
  },
});
