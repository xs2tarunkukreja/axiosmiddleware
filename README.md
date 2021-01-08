# The application is to use axios middleware.
I have started the application to use axios-middleware as I am not able to find proper example for the same.
## Topics that I am willing to Try
    1. Redux
    2. axios-middleware
    3. redux-thunk
    -- Some how I also used combine reducer concept. 
## Redux
- It provide a global store.
- Store have state and reducers.
- State keep data that can be used by different component.
- State can be updated by components by dispatching action.

- Action :- It is object that have type and payload.
- Reducer :- Whenever any action is dispatch the reducer get called which update the state.
- Action Creator :- Sometime instead of dispatching an Action object directly, we dispatch action creator (a method that return action object.). Nothing difference. Helpful, when 2 actions have payload difference only.

Also, we more useful stuff related to Redux
1. import { Provider } from "react-redux";
Provider component is main component. Its child get store state as property if needed.
2. import { connect } from "react-redux";
This method actually connect Our component with store.
3. import {createStore} from "redux";
It is used to create store.

Redux also has a concept of middlewares. So, there is a pipeline of middleware come into picture whenever any action is dispatced. "Redux-thunk" and "axios-middleware" are work with this concept.

## Combine-Reducer - combineReducers method
With normal reducer, component can access data like this.props.<<propertyname>>.
But when you use combinerReducers, now data is available like this.props.<<reducer>>.<<property>>.
Reducer work only on state.<<reducer>>.... data.

Also reducer get undefined as state so that you need to set state data under reducer.

--- In this code we have implemented this.