import React from 'react'

function Portals() {
  return React.createPortal(
    <h1>hello world</h1>
    , document.getElementById(".model-root")
  )
}

export default Portals