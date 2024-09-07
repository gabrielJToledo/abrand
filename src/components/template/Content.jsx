import React from 'react'
import './Content.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import Menu from '../Menu/Menu'

function Content() {
  return (
    <main className="content">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
      </Routes>
    </main>
  )
}

export default Content