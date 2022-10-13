import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
     <nav className='navbar navbar-expand-lg navbar-dark bg-warning'>
        <div className='container-fluid'>
            <div className='logo'>
              <Link className='nav-link' to='/'><h2>Five Star Food Delivery</h2></Link>
            </div>
            
            
              <ul className="nav justify-content-end">
                <Link className="nav-link active" aria-current="page"  to='/'>HOME</Link>                
                <Link className='nav-link' to='/menu'>Menu</Link>              
                <Link className='nav-link' to='/restuarants'>Restuarants</Link>
                <Link className="nav-link" to='/categories'>Categories</Link>  
                <Link className='nav-link' to='/name'>Name</Link>
                <Link className='nav-link' to='/price'>Price</Link>
              </ul>
            </div> 
        
    </nav>
    
    </div>
  )
}

export default Navbar;