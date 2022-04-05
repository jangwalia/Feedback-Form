
import React from 'react'
import propTypes from 'prop-types'
export default function Button({children,type,version,isDisabled}) {
  //Button component that can be shared with 
  //other componets
  return (
    <button type = {type} disabled = {isDisabled} className = {`btn btn-${version}`} >
      {children}
    </button>
  )
}
Button.defaultProps = {
  version : 'primary',
  type : 'button',
  isDisabled : false
}
Button.propTypes = {
  children : propTypes.node.isRequired,
  type:propTypes.string,
  version:propTypes.string,
  isDisabled:propTypes.bool
}
