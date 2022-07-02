import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';
import {Appearance} from 'react-native';
import DefaultTheme from './src/custom/Theme';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <PaperProvider theme={DefaultTheme}>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
