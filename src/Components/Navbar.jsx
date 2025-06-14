import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-[#093347] text-white px-6 py-4 shadow-md flex justify-between items-center" >
            {/* Logo och namn */}
            <div className="flex items-center space-x-2">
                <img src="/logga.jpeg" alt="" className="h-10 w-10 object-contain" />
                <span className="text-4xl font-bold">A Clinic</span>
            </div>
            <div className="space-x-8 flex items-center">
                <Link to="/" className="hover:underline font-semibold">Hem</Link>
                <Link to="/Behandling" className="hover:underline font-semibold">Behandling</Link>
                <Link to="/About" className="hover:underline font-semibold">Om oss</Link>
                <Link to="/Contact" className="hover:underline font-semibold">Kontakta oss</Link>
                <a href="https://www.bokadirekt.se/places/a-clinic-60706"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1876a3] px-4 py-2 rounded hover:bg-gray-100 font-semibold"
                >Boka Tid</a>
                

            </div>
        </nav>
    )
}
export default Navbar;