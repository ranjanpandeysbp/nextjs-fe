import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className='text-warning'>Service Page Specific Layout</h1>
        {children}
    </div>
  )
}

export default Layout