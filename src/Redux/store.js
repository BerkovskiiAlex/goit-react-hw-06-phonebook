import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebookSlise';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfigContacts = {
  key: 'posts',
  version: 1,
  storage,
  blacklist: ['filter'],
};

const persistedReducerContacts = persistReducer(
  persistConfigContacts,
  phonebookReducer
);

export const store = configureStore({
  reducer: { phonebook: persistedReducerContacts },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
