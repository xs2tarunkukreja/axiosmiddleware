import { combineReducers } from 'redux';
import offline from './OfflineReducer';

const rootReducer = combineReducers({
    offline
});

export default rootReducer;
