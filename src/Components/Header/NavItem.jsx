import { NavLink } from "react-router-dom";

const NavItem = () => {

    const baseStyle = "border text-base font-semibold";

    return (
        <>
            <li><NavLink to="/" className={({ isActive }) => `${baseStyle} ${isActive ? 'border-primary text-primary' : ''}`}>Home</NavLink></li>
            <li><NavLink to='/listed' className={({ isActive }) => `${baseStyle} ${isActive ? 'border-primary text-primary' : ''}`}>Listed Book</NavLink></li>
            <li><NavLink to='/read' className={({ isActive }) => `${baseStyle} ${isActive ? 'border-primary text-primary' : ''}`}>Page to Read</NavLink></li>
        </>
    )
}

export default NavItem
