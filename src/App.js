import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { StoreContext, reducer, initialState } from './store';

import Header from './components/Header/Header';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';

import './App.css';

const App = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const storeContextData = {
    store,
    dispatch
  };

  return (
    <StoreContext.Provider value={storeContextData}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>

        </Switch>
      </BrowserRouter>
    </StoreContext.Provider>
  )
}

export default App;
