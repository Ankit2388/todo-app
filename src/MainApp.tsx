import React, { useEffect } from 'react';

import { IndicatorView } from '@app/blueprints';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { LocalizationProvider, ThemeProvider } from './context';
import { AppNavigation, navigationRef } from './navigation/AppNavigation';
import store, { persistor } from './store';
import { loader } from './utils';
import { db } from './utils/sqlite';

export const MainApp = () => {
  useEffect(() => {
    const init = async () => {
      const a = await db.initDb()
      const createTaskTableRes = await db.createTaskTable()
      console.log('A ::: ', a);
      console.log('createTaskTableRes :: ', createTaskTableRes);

    }
    init()
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider>
        <LocalizationProvider>
          <NavigationContainer ref={navigationRef}>
            {/**
             * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
             * and saved to redux.
             * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
             * for example `loading={<SplashScreen />}`.
             * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
             */}
            <PersistGate loading={null} persistor={persistor}>
              <AppNavigation />
              <IndicatorView isLoading={false} ref={loader} />
            </PersistGate>
          </NavigationContainer>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};
