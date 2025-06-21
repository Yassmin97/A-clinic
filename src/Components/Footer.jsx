import { FiMapPin, FiMail, FiPhone, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black px-8 py-12">
      <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
        <div>
          <h3 className='font-semibold text-lg mb-2'>A Clinic</h3>
          <ul className='space-y-1'>
            <li><a href="#" className='hover:text-[#4287f5]'>Hem</a></li>
            <li><a href="#" className='hover:text-[#4287f5]'>Behandling</a></li>
            <li><a href="#" className='hover:text-[#4287f5]'>Om oss</a></li>
            <li><a href="#" className='hover:text-[#4287f5]'>Kontakta oss</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2" >Öppettider</h3>
          <p>Måndag - Söndag</p>
          <p>9:00 - 20:00</p>
        </div>

        <div>
          <h3 className='font-semibold text-lg mb-2'>Kontakta Oss</h3>
          <p className="flex items-center gap-2 mb-2">
            <FiMapPin className="text-xl text-[#4287f5]" />
            <a
            href="https://www.google.com/maps/place/Ostindiefararen+49,+417+17+Göteborg"
            target="_blank"
            rel="noopener noreferrer">
             Ostindiefararen 49, 417 17 Göteborg
            </a>
          </p>
          
          <p className="flex items-center gap-2 mb-2">
            <FiMail className="text-xl text-[#4287f5]" />
             <a href="mailto:aclinic_@hotmail.com">aclinic_@hotmail.com</a>
            </p>

          <p className="flex items-center gap-2  mb-2">
            <FiPhone className="text-xl text-[#4287f5]" />
              <a href="tel:0703504310">070-350 43 10</a>
            </p>
        
        <p className="flex items-center gap-2">
            <FiInstagram className="text-xl text-[#4287f5]" />
            <a href="https://instagram.com/aclinic_" target="_blank" rel="noopener noreferrer">aclinic_</a>
          </p>
      </div>
      </div>

      
      <div className='border-t border-gray-700 mt-8 pt-4 flex-col md:flex-row- items-center justify-between'>
        <p className='text-sm text-gray-400'>
          © Copyright {new Date().getFullYear()} - A Clinic | All rights reserved  
        </p>
      </div>


    </footer>
  );
};

export default Footer;
