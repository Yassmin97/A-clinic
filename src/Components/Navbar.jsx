import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const toggleDropDown = () => setDropDownOpen(!dropDownOpen);
    const closeDropDown = () => setDropDownOpen(false);

    return (
        <nav className="bg-white text-[#012840] z-50 text-xl px-6 py-4 shadow-lg flex justify-between items-center" >
      {/* logo */}
      <a href="/">
        <img src="/logo.png" alt="A Clinic Logo" className="h-13 w-13 object-contain" />
</a>
            <div className="space-x-8 flex items-center relative">
                <Link to="/" className="hover:text-[#4287f5] font-semibold">Hem</Link>

            <div className="relative group"
                onMouseEnter={() => window.innerWidth >= 768 && setDropDownOpen(true)}
                onMouseLeave={() => window.innerWidth >= 768 && setDropDownOpen(false)}>
            <button onClick={toggleDropDown} className="hover:text-[#4287f5] font-semibold focus:outline-none">Behandling</button>

            {dropDownOpen && (              
                <div className="absolute left-0 w-48 bg-white border rounded shadow-lg z-50">
                <Link to="/Behandling/Microneedling" onClick={closeDropDown} className="text-sm block px-4 py-2 hover:bg-gray-100">Microneedling</Link>
                <Link to="/Behandling/BB Glow" onClick={closeDropDown} className="text-sm block px-4 py-2 hover:bg-gray-100">BB Glow</Link>
                <Link to="/Behandling/LashLift" onClick={closeDropDown} className="text-sm block px-4 py-2 hover:bg-gray-100">LashLift</Link>
                <Link to="/Behandling/BrowLift" onClick={closeDropDown} className="text-sm block px-4 py-2 hover:bg-gray-100">BrowLift</Link>
 
            </div>
            )}
            </div>

                <Link to="/About#info" className="hover:text-[#4287f5] font-semibold">Om oss</Link>
                <Link to="/Contact#info" className="hover:text-[#4287f5] font-semibold">Kontakta oss</Link>
                <a href="https://www.bokadirekt.se/places/a-clinic-60706"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4287f5] text-white px-4 py-2 rounded hover:bg-[#012840] font-semibold"
                >Boka Tid</a>
                

            </div>
        </nav>
    )
}
export default Navbar;