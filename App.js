import { StyleSheet, Text, View } from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import container from './navegacao/LugaresNavigator'
import lugaresReducer from './store/lugares-reducer';

const rootReducer = combineReducers({
  lugares: lugaresReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return(
    <Provider store={store}>
      {container}
    </Provider>
  )
}
