import React from 'react'
import CounterContainer from '../containers/CounterContainer'

class CounterApp extends React.Component {
  render() {
    return (
      <div className='counter'>
        <CounterContainer />
      </div>  
    )
  }

}

export default CounterApp
