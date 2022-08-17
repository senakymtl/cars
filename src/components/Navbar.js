import React, {useState} from  'react';
import { Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar () {
    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMeneu = () => setClick(false)
    

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
             <Link to="/" className='navbar-logo'>
             CAR'S  <i className='fab fa-typo3 '/> 
             
             </Link>
             <ion-icon className='car-icon' size='large' name="car-sport-sharp"></ion-icon>
             <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-time' : 'fas fa-bars'} />
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'> 
                    <Link to='/' className='nav-links' onClick={closeMobileMeneu}>
                      Home  
                    </Link>
                </li>

                <li className='nav-item'>
                   <Link to='/contact' className='nav-links' onClick={closeMobileMeneu}>
                    Contact
                   </Link>
                </li>
                
                    <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMeneu}>
                      Sign UP  
                    </Link>
                    </li>
             </ul>
             {Button && <Button buttonStyle='btn--outline'>SIGN Up</Button>}
            </div>
         </nav>   
        </>
    );
}
export default Navbar;  