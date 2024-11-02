import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";


const NavBar = () => {
    return (
        <section className="mt-5">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FaBarsStaggered></FaBarsStaggered>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavItem></NavItem>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        <NavItem></NavItem>
                    </ul>
                </div>
                <div className="navbar-end gap-4 flex-wrap">
                    <Link to=''><button className="btn px-5 text-white text-lg bg-primary">Sign In</button></Link>
                    <Link to=''><button className="btn px-5 text-white text-lg bg-secondary">Sign Up</button></Link>
                </div>
            </div>
        </section>
    )
}

export default NavBar
