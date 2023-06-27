import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import notesReducer from './notesSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  notesdata: notesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types

        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],

        // Ignore these paths in the state

        ignoredPaths: ['items.dates'],

        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const persistConfig = {
//   key: 'persist-key',
//   storage: Storage,
// };

// const persistedReducer = persistReducer(persistConfig, notesReducer);
// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistedStore = persistStore(store);

// export {store, persistedStore};
