import { useNavigate } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route, { replace: true });
    };

    return (
        <div>
        <div className='navbar'>
            <button onClick={() => handleClick('/marina')}>Marina</button>
            <button onClick={() => handleClick('/beach')}>Beach</button>
            <button onClick={() => handleClick('/')}>Home</button>
            <button onClick={() => handleClick('/construction')}>Construction</button>
            <button onClick={() => handleClick('/traderjoes')}>Trader Joes</button>
        </div>
        </div>
    );
};

export default Navbar;