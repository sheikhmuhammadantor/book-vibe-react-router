import { NavLink } from "react-router-dom";

const NavItem = () => {

    const baseStyle = "border font-semibold focus:text-primary focus:bg-transparent";

    return (
        <>
            <li><NavLink to="/" className={({ isActive }) => `${baseStyle} ${isActive ? 'border-primary text-primary' : ''}`}>Home</NavLink></li>
            <li><NavLink to='/listed' className={({ isActive }) => `${baseStyle} ${isActive ? 'border-primary text-primary' : ''}`}>Listed Book</NavLink></li>
            <li><NavLink to='/read' className={({ isActive }) => `${baseStyle} ${isActive ? 'border-primary text-primary' : ''}`}>Page to Read</NavLink></li>
        </>
    )
}

export default NavItem
