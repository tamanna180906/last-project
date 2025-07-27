import React from 'react'

function Container({children,className}) {
  return (
    <div className={`max-w-[1220px] px-2 mx-auto ${className}`}>{children}</div>
  )
}

export default Container