import './Navbar.css'
import { FaCartPlus } from "react-icons/fa6";

function Navbar({productCount}){
    return(
        <nav>
            <div>
                <h1>Use Reducer</h1>
            </div>
            <div className='icon-and-count'>
                <FaCartPlus className='navbar-icon'/>
                <p className='item-count'>{productCount > 0 ? productCount : 0}</p>
            </div>
            
        </nav>
    )
}

export default Navbar;
