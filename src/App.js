import React from 'react';
import Router from './router';
import { CartProvider } from './context/contextCart';
const App = () => {
  return (
    <CartProvider>
      <Router/>
    </CartProvider>
  );
}

export default App;
