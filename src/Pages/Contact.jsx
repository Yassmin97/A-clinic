import React from "react";

const Contact = () => {
  return(
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Kontakta Oss</h1>

      <div className="grid md:grid-cols-2 gap-8">
{/* Contact Info */}
        <div>
          <p className="mb-4"><strong>Adress:</strong> Ostindiefararen 49, 417 65 Göteborg</p>
          <p className="mb-4"><strong>Mejladress:</strong> <a href="mailto:aclinic_@hotmail.com" className="text-blue-600 underline">aclinic_@hotmail.com</a></p>
          <p className="mb-4"><strong>Telefon:</strong> <a href="tel:0703504310" className="text-blue-600 underline">070-350 43 10</a></p>
          <p className="mb-4"><strong>Öppettider:</strong> 09.00 - 20.00</p>
          <p className="mb-4"><strong>Instagram:</strong> <a href="https://instagram.com/aclinic_" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">@aclinic_</a></p>
        </div>
    
      </div>

      <div className="w-full h-[400px]">
        <iframe 
        title="A Clinic Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.3841761457865!2d11.91861721575523!3d57.70759418110392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3a6e0982ebf%3A0x1d8b69d1977748b4!2sOstindiefararen%2049%2C%20417%2065%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1717600000000!5m2!1sen!2sse"        
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow"
        ></iframe>
      </div>
    </div>

    
  )
}

export default Contact;