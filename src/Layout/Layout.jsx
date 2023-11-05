import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex gap-2'>
        <Sidebar/>

        <div className="w-3/4  absolute top-0 right-0 ml-8">
         {children}   
        </div>
        
    </div>
  )
}

export default Layout