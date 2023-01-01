import sandwichIcon from '../images/reorder-three-outline.svg';
import '../../styles/NavStyle.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import userIcon from '../images/people-outline.svg';
import cashIcon from '../images/cash-outline.svg';
import ataIcon from '../images/reader-outline.svg';


function Navbar(){

    const [isOpen, setOpen] = useState(false);
    
    return(
        <nav 
            className="navbar is-primary"
            role="navigation"
            aria-label="main-navigation"
            >
            <div  className = 'sandwich'><img src={sandwichIcon}/></div>
            <div>
                <NavLink to='/caixinha'>
                    <img src={cashIcon}/>
                </NavLink>
                
            </div>
            <div>
                <NavLink to='/home'>
                    <img src={ataIcon}/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/usuarios'>
                    <img src={userIcon}/>
                </NavLink>
            </div>
          
        </nav>
    );
}

export default Navbar;