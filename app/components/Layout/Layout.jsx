import React from 'react';
export default class Layout extends React.Component {
  render() {
    return (
      <div className='layout'>
        <div className='header'>
          <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
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
  // children is a special proptype
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}
