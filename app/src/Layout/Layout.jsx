import React from 'react';


export default class Layout extends React.Component {
  render() {
    return (
      <div className='layout'>
        <div className='navbar'>
          <ul>
            <li>Home</li>
            <li>Todo</li>
            <li>About</li>
          </ul>
        </div>
        <div className='content'>
          {this.props.children}
        </div>
        <div className='footer'>
          <a href='mailto:szabo.matthew@gmail.com'>Contact</a>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}
