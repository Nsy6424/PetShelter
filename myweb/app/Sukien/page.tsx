import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Homepage from '../components/Homepage'
import Newselection from './component/Newselection'

const page = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Menu></Menu>
        <Homepage></Homepage>
        <Newselection></Newselection>
    </div>
  )
}

export default page