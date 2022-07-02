import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

interface Props {
  formik: any;
  label?: string;
  placeholder?: string;
  icon?: boolean;
  mode?: string;
  name: string;
  inputStyle?: {};
}

const CustomInput = ({
  formik,
  label,
  placeholder,
  icon = false,
  mode,
  name,
  inputStyle,
}: Props) => {
  const [isEyeOff, setIsEyeOff] = useState(true);
  return (
    <View style={styles.container}>
      <TextInput
        //@ts-ignore
        mode={mode}
        error={formik.touched[name] && formik.errors[name]}
        label={label}
        placeholder={placeholder}
        onChangeText={formik.handleChange(name)}
        onBlur={() => formik.handleBlur(name)}
        value={formik?.values?.[name]}
        secureTextEntry={icon ? (isEyeOff ? true : false) : false}
        right={
          icon ? (
            <TextInput.Icon
              name={isEyeOff ? 'eye-off' : 'eye'}
              onPress={() => setIsEyeOff(!isEyeOff)}
            />
          ) : null
        }
        style={[styles.input, inputStyle]}
        theme={{
          colors: {
            primary: '#00B200',
          },
        }}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  input: {},
});
