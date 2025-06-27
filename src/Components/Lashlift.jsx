
import { FaClock } from "react-icons/fa";

const Lashlift = () => {
  return (
    <div>
    <div className="w-full h-138 bg-cover bg-[center_top_60%] bg-no-repeat" style={{backgroundImage: `url('/lashlift3.jpeg')`}}>
        
    <div className="bg-black/35 w-full h-138 px-30 py-34 md:py-40">
      <h1 className="text-4xl md:text-5xl font-bold pt-17 text-white mb-6">Lashlift</h1>
      <h4 className="text-2xl md:text-2xl font-bold  text-white mb-6">Böjda fransar med naturligt lyft</h4>

    <a href="https://www.bokadirekt.se/places/a-clinic-60706" className="mt-6 inline-block bg-white text-[#4287f5] font-bold text-lg hover:bg-[#c5c5c5] py-3 px-6 rounded transition">
        Boka Nu
        </a>
    </div>
    </div>
    
<div className="max-w-7xl mx-auto px-4 mt-25">
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8  md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div className="w-full mt-10">
      <h2 className="font-semibold text-lg mb-4">Hur går behandlingen till?</h2>
      <p className="mb-6">
      Lashlift är en skonsam behandling som lyfter och böjer dina egna naturliga fransar från roten, vilket ger intrycket av längre, fylligare och mer definierade fransar – helt utan fransförlängning. Behandlingen passar alla som vill framhäva sina ögon och slippa använda fransböjare eller mascara varje dag.
      </p>
      <p className="mb-6">Under behandlingen fästs fransarna varsamt mot en silikonform, och en speciell vätska appliceras som ger fransarna sin böj. Resultatet förstärks ofta med fransfärg, vilket gör att fransarna ser fylligare och mer markerade ut. Resultatet håller i ca 6–8 veckor beroende på fransarnas växtcykel
</p>

      <h3 className="font-semibold text-lg mb-2">Att tänka på efter behandlingen:</h3>
      <ul className="list-disc ml-5 mb-4 space-y-1">
        <li>Undvik vatten, ånga, smink och att gnugga ögonen de första 24 timmarna.</li>
      </ul>

<div className="flex items-center gap-2 mt-4 text-[#012840]">
  <FaClock className="text-xl" />
  <span className="font-semibold">45 minuter</span>
</div>
    </div>

    <div className="rounded overflow-hidden pl-40 mt-10">
        <img src="/lashlift2.jpeg" alt="lashlift" className="rounded-lg shadow-md w-80 h-auto" />
            <a href="https://www.bokadirekt.se/places/a-clinic-60706" className="inline-block text-white bg-[#4287f5] font-bold text-lg hover:bg-[#c5c5c5] py-3 px-6 rounded transition ml-25 mt-10">
        Boka Nu
        </a>
    </div>
    </div>


    <div className="mt-16 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center mt-30">Fler bilder från behandlingen</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4 mb-30 mt-15">
          <img src="/lashlift.png" alt="lashlift" className="rounded-lg shadow w-100 h-auto flex-shrink-0" />
          <img src="/lashlift3.jpeg" alt="lashlift" className="rounded-lg shadow w-100 h-auto flex-shrink-0" />
          <img src="/lashlift4.png" alt="lashlift" className="rounded-lg shadow w-90 h-auto flex-shrink-0" />
        </div>
    
    </div>
    </div>
    </div>
  );
};
export default Lashlift;
