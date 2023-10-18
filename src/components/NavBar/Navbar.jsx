import "./styles.css";
import { Button } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
return (
    <div className="navbar-container">
    <div>
        <img alt="Joystick" src={"./images/joystick-logo.png"} width={'150px'}/>
    </div>
    <div>
        <ul className="list-container">
            <li>
                <button className='category-button'>
                    PC
                </button>
            </li>
            <li>
                <button className='category-button'>
                    Xbox
                </button>
            </li>
            <li>
                <button className='category-button'>
                    PlayStation
                </button>
            </li>
        </ul>
    </div>
    <CartWidget />
    </div>
);
};

export default Navbar;
