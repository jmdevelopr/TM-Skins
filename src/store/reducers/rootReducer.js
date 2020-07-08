import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import shopReducer from './shopReducer';

const rootReducer = combineReducers({
    shopReducer,
    firestoreReducer
})

export default rootReducer;