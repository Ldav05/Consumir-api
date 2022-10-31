import React from 'react'

const Navbar = ({brand}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase " href="/">Usuarios</a>
      </div>
    </nav>
  )
}

export default Navbar