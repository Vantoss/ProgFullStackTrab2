//import { useState } from 'react'
import { Outlet } from 'react-router'
import './css/App.css'

function App() {

  return (
    <>
      <Outlet></Outlet>
      <footer id="footer"></footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"></script>
    </>
  )
}

export default App
