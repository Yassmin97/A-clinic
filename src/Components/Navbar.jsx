import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white text-[#012840] z-50 text-xl px-6 py-4 shadow-lg flex justify-between items-center" >
            {/* namn */}
            <Link to="/" className="text-3xl font-bold text-[#1b6080]">A Clinic</Link>

            <div className="space-x-8 flex items-center">
                <Link to="/" className="hover:text-[#4287f5] font-semibold">Hem</Link>
                <Link to="/Behandling" className="hover:text-[#4287f5] font-semibold">Behandling</Link>
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