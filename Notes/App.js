import React from 'react';
import Header from './src/components/Header';
import NotesList from './src/components/notesList';
import {store, persistor} from './src/redux/store';
// import { store } from 'redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// import {persistStore} from 'redux-persist';
// import { View } from 'react-native';

// let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <View style={{backgroundColor:'blue'}}> */}
          <Header />
          <NotesList />
        {/* </View> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
