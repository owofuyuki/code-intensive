import { Link, NavLink } from 'react-router-dom';

const activeClass = (params) => {
    return params.isActive ? "active-menu-item" : "";
};

const NavBar = () => {
    return (
        <ul style={{ display: 'flex', listStyle: 'none' }}>
            <li style={{ margin: '6px 12px' }}><NavLink className={activeClass} to="/">Home</NavLink></li>
            <li style={{ margin: '6px 12px' }}><NavLink className={activeClass} to="/welcome">Welcome</NavLink></li>
            <li style={{ margin: '6px 12px' }}><NavLink className={activeClass} to="/products">Products</NavLink></li>
            <li style={{ margin: '6px 12px' }}><NavLink className={activeClass} to="/profile">Profile</NavLink></li>
        </ul>
    );
};

export default NavBar;