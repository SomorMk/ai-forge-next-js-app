import React from 'react'

export default function SectionHeading({className, title}) {
  return (
    <h2 className={`text-white/90 text-4xl font-medium ${className}`}>{title}</h2>
  )
}