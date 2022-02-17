import React from 'react';
import Routes from './app/routes';
import appRoutes from './app/routes/noAuthRoutes';
import { Provider } from 'react-redux';
import store from './app/redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes routes={appRoutes} />
    </Provider>
  );
}

export default App;
