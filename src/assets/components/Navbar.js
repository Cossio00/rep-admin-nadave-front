import sandwichIcon from '../images/reorder-three-outline.svg';
import '../../styles/NavStyle.css';

function Navbar(){
    return(
        <div className="sandwich-menu">
            <img src={sandwichIcon}/>
        </div>
    );
}

export default Navbar;