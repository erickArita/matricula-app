import React from 'react';
import { AppRouter } from './navigation/AppRouter';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const App = () => {

  return (
    <Provider store={store}>

      <AppRouter /> 

    </Provider>

  )
}

export default App;