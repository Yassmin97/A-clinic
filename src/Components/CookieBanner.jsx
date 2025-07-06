import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const userConsent = Cookies.get("userConsent");
    if (!userConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("userConsent", "true", { expires: 30 });
    setShowBanner(false);
  };

   const handleRefuse = () => {
    Cookies.set("userConsent", "false", { expires: 30 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-lg p-4 md:bottom-4 md:left-4 md:right-4 md:rounded-lg max-w-5xl mx-auto md:mb-4 md:px-6 md:flex md:items-center md:justify-between">
      <p className="text-sm text-gray-800 mb-3 md:mb-0 md:mr-4">
        Vi använder cookies för att förbättra din upplevelse. Genom att klicka på "Acceptera" godkänner du vår användning av cookies.
      </p>
       <div className="flex gap-3">
      <button
        onClick={handleAccept}
        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded text-center"
      >
        Acceptera
      </button>

      <button
          onClick={handleRefuse}
          className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-5 py-2 rounded"
        >
          Nej
        </button>
    </div>
    </div>
  );
};

export default CookieBanner;
