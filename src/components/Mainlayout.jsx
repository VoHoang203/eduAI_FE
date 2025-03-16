import React from 'react'
import Header from './Header'
import {Outlet} from "react-router-dom"
export default function Mainlayout() {
  return (
    <>
      <Header/>
      <div className=""><Outlet /></div>
      
    </>
  )
}
