import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer } from '../reducers/reducer';

const composes = composeWithDevTools(applyMiddleware(thunk));

const reducers = reducer;

const store = createStore(
    reducers,
    composes
);

export { store };