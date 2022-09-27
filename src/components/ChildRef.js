import React from 'react'

 const ChildRef = React.forwardRef((props, ref) => {
    return (
      <div>
        <input ref={ref}></input>
      </div>
    )
  }
  )

export default ChildRef;