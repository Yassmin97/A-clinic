
import { FaClock } from "react-icons/fa";

const Browlift = () => {
  return (
    <div>
<div
    className="hidden md:block w-full md:w-352 h-138 bg-right bg-no-repeat absolute top-21 left-0 z-0"
    style={{ backgroundImage: `url('/Browlift2.jpeg')` }}
  ></div>
 <div
    className="w-full md:w-180 h-138 bg-[center_top_50%] bg-no-repeat relative z-10"
    style={{ backgroundImage: `url('/browlift.jpeg')` }}
  >
    <div className="bg-black/35 w-full md:w-352 h-138 px-6 md:px-30 py-34 md:py-40">
      <h1 className="text-4xl md:text-5xl font-bold pt-17 text-white mb-6">Browlift</h1>
      <h4 className="text-2xl md:text-2xl font-bold text-white mb-6">Formade och fylligare bryn</h4>

    <a href="https://www.bokadirekt.se/places/a-clinic-60706" className="mt-6 inline-block bg-white text-[#4287f5] font-bold text-lg hover:bg-[#c5c5c5] py-3 px-6 rounded transition">
        Boka Nu
        </a>
    </div>
    </div> 
    
<div className="max-w-7xl mx-auto px-4 mt-24 mb-30">
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div className="w-full md:w-[100%] mt-16">
      <h2 className="font-semibold text-lg mb-4">Hur går behandlingen till?</h2>
      <p className="mb-6">
    Browlift (även kallat brow lamination) är en behandling som ger brynen ett lyft, mer volym och en formbar struktur. Genom att mjuka upp brynstråna och kamma dem i önskad riktning kan man skapa ett symmetriskt, välvårdat och fylligare utseende – även på glesa eller svårformade bryn. Behandlingen avslutas oftast med färgning för ett komplett resultat. Browlift är perfekt för dig som vill ha ett mer markerat men naturligt uttryck, eller få dina bryn att hålla formen hela dagen – utan bryngel eller smink. Effekten varar i ca 4–6 veckor beroende på din hårväxt.
      </p>

<div className="flex items-center gap-2 mt-4 text-[#012840]">
  <FaClock className="text-xl" />
  <span className="font-semibold">30 minuter</span>
</div>
    </div>

    <div className="rounded overflow-hidden md:pl-30 pl-0">
        <img src="/browlift.jpeg" alt="browlift" className="rounded-lg shadow-md md:w-80 w-full h-auto" />
            <a href="https://www.bokadirekt.se/places/a-clinic-60706" className="inline-block text-white bg-[#4287f5] font-bold text-lg hover:bg-[#c5c5c5] py-3 px-6 rounded transition md:ml-22 ml-28 mt-6 md:mt-10 md:w-auto">
        Boka Nu
        </a>
    </div>
    </div>

    </div>
    </div>
   
  );
};
export default Browlift;
