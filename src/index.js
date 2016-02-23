import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/TodoReducer';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions/TodoAction';

let store = createStore(todoApp);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening to state updates
unsubscribe();