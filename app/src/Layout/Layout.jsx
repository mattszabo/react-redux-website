import React from 'react';
import NavbarApp from '../Navbar/components/NavbarApp'

export default class Layout extends React.Component {
  render() {
    return (
      <div className='layout'>
        <NavbarApp />
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
