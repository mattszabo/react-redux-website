import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1>
          <Link to='/'>CounterApp</Link>
        </h1>
        {React.cloneElement(this.props.children,
          { ...this.props, key: undefined, ref: undefined })}
      </div>
    )
  }
}

Main.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}

export default Main;
