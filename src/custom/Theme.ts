import {DefaultTheme as RNDefaultTheme, Theme} from '@react-navigation/native';
import {DefaultTheme as PaperDefaultTheme} from 'react-native-paper';

const DefaultTheme: Theme & ReactNativePaper.Theme = {
  ...RNDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...RNDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: '#00B200',
    error: 'red',
  },
};

export default DefaultTheme;
