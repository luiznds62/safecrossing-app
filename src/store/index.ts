import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './userReducer';

const persistConfig = {
    key: 'user',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    userReducer: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
