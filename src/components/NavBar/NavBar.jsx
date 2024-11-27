import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" },
      ];
      
    return (
    <nav>
        <p onClick={() => setOpen(!open)} className="text-2xl md:hidden p-6">
        {
            open === true ? <IoCloseSharp /> : < HiOutlineMenuAlt1 />
        }    
        </p>
        <ul className={`md:flex duration-1000 absolute md:static bg-[#a926e649]
        ${open ? "top-28" : "-top-60"}    
        text-white p-5 shadow-2xl `}>
        {
            routes.map(route => <Link key={route.id} route={route} ></Link> )
        } 
        </ul>   
    </nav>
    );
};

export default NavBar;