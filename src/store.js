import {createStore} from "redux";
import allReducers from './reducers';

function configureStore(state = {message: "Initial Welcome", towhom: "TK World"}) {
    return createStore(allReducers, state);
}

export default configureStore;