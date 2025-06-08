import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center" >
            {/* Logo och namn */}
            <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="" className="h-10 w-10 object-contain" />
                <span className="text-4xl font-bold">A Clinic</span>
            </div>
            <div className="space-x-8 flex items-center">
                <Link to="/" className="hover:underline">Hem</Link>
                <Link to="/Behandling" className="hover:underline">Behandling</Link>
                <Link to="/About" className="hover:underline">Om oss</Link>
                <Link to="/Contact" className="hover:underline">Kontakta oss</Link>
                <a href="https://www.bokadirekt.se/places/a-clinic-60706"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-gray-100 font-medium"
                >Boka Tid</a>
                <div className="bg-red-500 text-white p-4">
  If you see this with a red background, Tailwind is working!
</div>

            </div>
        </nav>
    )
}
export default Navbar;