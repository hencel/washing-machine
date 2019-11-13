import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  form: reduxFormReducer,
  composeWithDevTools
});
const storeUsers = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);

export default storeUsers;
