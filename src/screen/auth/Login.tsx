import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomInput from '../../custom/CustomInput';
import {RootStackParamList} from '../../navigation/RootNavigation';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../redux/authSlice';

type Props = NativeStackScreenProps<RootStackParamList>;

const initialValues = {
  nameIs: '',
};

const Login = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    nameIs: Yup.string()
      // .min(6, 'Minimum 6 character')
      // .max(100, 'Maximum 100 character')
      .required('Name is required'),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, {setSubmitting, resetForm}) => {
      setSubmitting(false);
      resetForm();
      if (values.nameIs === 'f') {
        dispatch(updateUser(values?.nameIs));
        navigation.navigate('Drawer');
      }
    },
  });
  return (
    <View style={styles.main}>
      <CustomInput
        label="Name"
        name="nameIs"
        mode="outlined"
        icon={true}
        formik={formik}
      />

      <TouchableOpacity style={styles.button} onPress={formik?.handleSubmit}>
        <Text>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {backgroundColor: 'red', padding: 10},
  input: {
    borderWidth: 2,
    width: 300,
  },
});
