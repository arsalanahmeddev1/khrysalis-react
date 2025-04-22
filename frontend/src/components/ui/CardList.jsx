import React from 'react'

const CardList = ({children, variant = 'grid', className=""}) => {
  const layoutStyles =
    variant === 'grid'
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      : 'flex flex-col gap-4';
  return (
    <div className={`card-container container mx-auto ${layoutStyles} ${className}`} >
      {children}
    </div>
  )
}

export default CardList
