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
                <Link className='nav-link' to='/menu'>MENU</Link>              
                <Link className='nav-link' to='/restuarants'>RESTURANT</Link>
                <Link className="nav-link" to='/categories'>CATEGORIES</Link>  
                <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Search By 
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <Link className="nav-link" to="/searchbyname">NAME</Link>
                </DropdownItem>
                <DropdownItem>
                <Link className="nav-link" to="/searchbyprice">PRICE</Link>
                </DropdownItem>
                <DropdownItem>
                <Link className="nav-link" to="/searchbyrating">RATING</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
              </ul>
            </div> 
        
    </nav>
    
    </div>
  )
}

export default Navbar;