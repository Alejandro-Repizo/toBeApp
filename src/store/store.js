import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '@reducers/authReducer';
import { postReducer } from '@reducers/postReducer';
import { uiReducer } from '@reducers/uiReducer';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const reducers = combineReducers({
	auth: authReducer,
	post: postReducer,
	ui: uiReducer,
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
