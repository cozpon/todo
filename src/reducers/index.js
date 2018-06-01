import { combineReducers } from 'redux';
// using combineReducers to allow more than one REDUCER to be used cleanly
// it's a built in function from Redux

// I separated my reducer files in case I want to expand this project.

import todoList from './todoList';

export default combineReducers({
  todoList
});