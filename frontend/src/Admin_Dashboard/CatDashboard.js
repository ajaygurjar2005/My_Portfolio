import React from 'react'
import Category from './Category'
import Admin_Header from './Admin_Header'
import Sidebar from './Sidebar'


const CatDashboard = () => {
  return (
    <div>
      <div
        x-data="{ sidebarOpen: false }"
        className="flex h-screen bg-gray-200">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Admin_Header />
          <Category/>
        </div>
      </div>
    </div>
  )
}

export default CatDashboard
