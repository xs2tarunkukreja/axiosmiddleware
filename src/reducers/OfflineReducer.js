import {
    APP_EVENT,
    MSG_EVENT,
    TOWHOM_EVENT
} from "../constants/actions/offline";

const OfflineReducer = (state, action) => {
    switch(action.type) {
        case APP_EVENT:
            return Object.assign({}, state, { message: 'App Welcome', towhom: 'App World' });
        case MSG_EVENT:
            return Object.assign({}, state, { message: 'Msg Welcome', towhom: 'Msg World' });
        case TOWHOM_EVENT:
            return Object.assign({}, state, { message: 'ToWhom Welcome', towhom: 'ToWhom World' });    
        default: 
            return Object.assign({}, state, { message: 'Reducer Welcome', towhom: 'Reducer World'});
    }
};

export default OfflineReducer;