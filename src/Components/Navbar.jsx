import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X} from "lucide-react";


const Navbar = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleDropDown = () => setDropDownOpen(!dropDownOpen);
    const closeDropDown = () => setDropDownOpen(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false); 
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
    <nav className="bg-white text-[#012840] z-50 text-xl px-6 py-4 shadow-lg flex justify-between items-center" >
        
      {/* logo */}
      <a href="/">
        <img src="/logo.png" alt="A Clinic Logo" className="h-13 w-13 object-contain" />
            </a>

            <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                {menuOpen ? <X className="w-6 h-6" />: <Menu className="w-6 h-6" />}
            </button>

            <div className="space-x-8 hidden md:flex items-center relative">
                <Link to="/" className="hover:text-[#4287f5] font-semibold">Hem</Link>

            <div className="relative group"
                onMouseEnter={() => window.innerWidth >= 768 && setDropDownOpen(true)}
                onMouseLeave={() => window.innerWidth >= 768 && setDropDownOpen(false)}>

            <button className="hover:text-[#4287f5] font-semibold focus:outline-none">Behandling</button>

            {dropDownOpen && (              
                <div className="absolute left-0 w-48 bg-white border rounded shadow-lg z-50">
                <Link to="/Behandling/Microneedling" onClick={closeDropDown} className="text-sm block px-4 py-2 hover:bg-gray-100">Microneedling</Link>
                <Link to="/Behandling/BBGlow" onClick={closeDropDown} className="text-sm block px-4 py-2 hover:bg-gray-100">BB Glow</Link>
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
           

            {/* Mobile sidebar (right slide-in menu) */}
                <div className={`fixed top-0 right-0 h-100 w-64 rounded-xl bg-white/80 shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            <div className="flex flex-col p-6 space-y-4">
                 <button onClick={toggleMenu} className="self-end mb-4">
                  <X className="w-6 h-6" />
        </button>

        <Link to="/" onClick={toggleMenu} className="hover:text-[#4287f5] font-semibold">Hem</Link>

        <div>
            <button onClick={toggleDropDown} className="hover:text-[#4287f5] font-semibold w-full text-left">Behandling</button>
            {dropDownOpen && (
                <div className="ml-4 mt-1 space-y-1">
                    <Link to="/Behandling/Microneedling" onClick={() => { closeDropDown(); toggleMenu(); }} className="text-sm block hover:text-[#4287f5]">Microneedling</Link>
                    <Link to="/Behandling/BB Glow" onClick={() => { closeDropDown(); toggleMenu(); }} className="text-sm block hover:text-[#4287f5]">BB Glow</Link>
                    <Link to="/Behandling/LashLift" onClick={() => { closeDropDown(); toggleMenu(); }} className="text-sm block hover:text-[#4287f5]">LashLift</Link>
                    <Link to="/Behandling/BrowLift" onClick={() => { closeDropDown(); toggleMenu(); }} className="text-sm block hover:text-[#4287f5]">BrowLift</Link>
                </div>
            )}
        </div>

        <Link to="/About#info" onClick={toggleMenu} className="hover:text-[#4287f5] font-semibold">Om oss</Link>
        <Link to="/Contact#info" onClick={toggleMenu} className="hover:text-[#4287f5] font-semibold">Kontakta oss</Link>
        <a
            href="https://www.bokadirekt.se/places/a-clinic-60706"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4287f5] text-white px-9 py-2 rounded hover:bg-[#012840] font-semibold w-max mx-auto"
        >
            Boka Tid
        </a>
    </div>
</div>

        </nav>
    )
}
export default Navbar;