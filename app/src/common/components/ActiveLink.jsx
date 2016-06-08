import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const ActiveLink = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <Link to="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </Link>
  )
}

ActiveLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ActiveLink
