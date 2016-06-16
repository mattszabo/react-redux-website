import React from 'react';
import CounterApp from './Counter/components/CounterApp';
import CounterEvenApp from './CounterEven/components/CounterEvenApp';
import Navbar from './Navbar/components/Navbar'

const App = () => (
  <div className='app'>
    <Navbar />
    <CounterApp />
    <CounterEvenApp />
  </div>
)

export default App
