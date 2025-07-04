//import { useState } from 'react'
import { Outlet } from 'react-router'
import './css/App.css'
import  getMovi from './ListarMovi'

function App() {
  getMovi.getMovi()
  return (
    <>
      <Outlet></Outlet>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"></script>
    </>
  )
}

export default App
