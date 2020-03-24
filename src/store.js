/*
   npm i redux react-redux redux-thunk redux-devtools-extension
   redux -> state management library it is nothing to do with react itself
   react-redux -> it is what we use to implement react with redux, thats what allow us to connect react and redux
   redux-thunk -> it is piece of middleware, it alows us to make a async functions inside our actions
   redux-devtools-extension -> for chrome

*/

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
