import React from 'react'

export default function Container({children, className}) {
  return (
    <div className={`w-[1400px] mx-auto px-5 ${className}`}>{children}</div>
  )
}