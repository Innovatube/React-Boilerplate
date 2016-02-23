import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/TodoAction';

const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
             return [
                 ...state,
                 {
                     id: action.id,
                     text: action.text,
                     completed: false
                 }
             ];
        case 'TOGGLE_TODO':
            return state;
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;