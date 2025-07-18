import { FiMapPin, FiMail, FiPhone, FiInstagram, FiClock } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const location = useLocation();
  const form = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if(location.hash === "#info"){
      const section = document.getElementById("top-contact");
      if(section) {
        section.scrollIntoView({ behavior: "smooth"});
      }
    }
  }, [location]);

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6tmjewo",     
      "template_id",    
      form.current,
      "WvcBLlEd_V1MUfrC-"     
    )
    .then(() => {
      setShowConfirmation(true);
      form.current.reset();
      setTimeout(() => setShowConfirmation(false), 5000);
})

  };

  return (
    <div id="top-contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 mt-20 mb-20 rounded-2xl bg-gray-100 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Kontakta Oss</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
         <div>
        <p className="text-base sm:text-lg font-semibold mb-4 sm:ml-3">
           Har du frågor eller funderingar? Tveka inte att höra av dig!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-white p-6 sm:p-6 rounded shadow">
          <div>
            <label className="block font-bold pb-1 sm:pb-2">Namn</label>
            <input name="name" type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
          </div>
          <div>
            <label className="block font-bold mb-2">E-post</label>
            <input name="email" type="email" className="w-full border border-gray-300 rounded px-4 py-2" required />
          </div>
          <div>
            <label className="block font-bold mb-2">Meddelande</label>
            <textarea name="message" rows="5" className="w-full border border-gray-300 rounded px-4 py-2" required></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#4287f5] text-white px-6 py-3 rounded font-semibold hover:bg-[#012840] sm:w-auto"
          >
            Skicka
          </button>
        </form>
        {showConfirmation && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white border border-green-600 shadow-xl px-6 py-4 rounded-lg text-center">
      <p className="text-green-600 font-bold text-lg">✅ Ditt meddelande har skickats!</p>
    </div>
  </div>
)}


</div>
        {/* Info + Map */}
        {/* Contact Info & Map */}
        <div className="w-full h-auto space-y-6">
        <div className="space-y-4 sm:text-base text-sm">
          <p className="flex items-center gap-2">
            <FiMapPin className="text-xl text-[#4287f5]" />
            <a
            href="https://www.google.com/maps/place/Ostindiefararen+49,+417+17+Göteborg"
            target="_blank"
            rel="noopener noreferrer">
             Ostindiefararen 49, 417 17 Göteborg
            </a>
      </p>
          <p className="flex items-center gap-2">
           <FiMail className="text-xl text-[#4287f5]" />
            <a href="mailto:aclinic_@hotmail.com">aclinic_@hotmail.com</a>
      </p>
          <p className="flex items-center gap-2">
            <FiPhone className="text-xl text-[#4287f5]" />
            <a href="tel:0703504310">070-350 43 10</a>
      </p>
          <p className="flex items-center gap-2">
            <FiClock className="text-xl text-[#4287f5]" />
              Måndag - Söndag 9:00 - 20:00
      </p>
          <p className="flex items-center gap-2">
            <FiInstagram className="text-xl text-[#4287f5]" />
            <a href="https://instagram.com/aclinic_" target="_blank" rel="noopener noreferrer">aclinic_</a>
      </p>
  </div>

  <iframe
    title="A Clinic Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.3841761457865!2d11.91861721575523!3d57.70759418110392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3a6e0982ebf%3A0x1d8b69d1977748b4!2sOstindiefararen%2049%2C%20417%2065%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1717600000000!5m2!1sen!2sse"    width="100%"
    height="280"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg shadow"
  ></iframe>
</div>
      </div>
    </div>
   
  );
};

export default Contact;
