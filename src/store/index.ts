import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './userReducer';
import speakReducer from './speakReducer';

const persistConfig = {
    key: 'user',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    userReducer: userReducer,
    speakReducer: speakReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
