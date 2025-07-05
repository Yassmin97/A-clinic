
import { FaClock } from "react-icons/fa";

const BBGlow = () => {
  return (
    <div>
    <div className="w-full h-138 bg-cover bg-[center_top_60%] bg-no-repeat" style={{backgroundImage: `url('/bb.glow.jpeg')`}}>
        
    <div className="bg-black/35 w-full h-138 px-6 md:px-30 py-34 md:py-40">
      <h1 className="text-4xl md:text-5xl font-bold pt-17 text-white mb-6">BB Glow</h1>

    <a href="https://www.bokadirekt.se/places/a-clinic-60706" className="mt-6 inline-block bg-white text-[#4287f5] font-bold text-lg hover:bg-[#c5c5c5] py-3 px-6 rounded transition">
        Boka Nu
        </a>
    </div>
    </div>
    
<div className="max-w-7xl mx-auto px-4 mt-25">
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8  md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div className="w-full md:w-[100%]">
      <h2 className="font-semibold text-lg mb-4">Hur går behandlingen till?</h2>
      <p className="mb-6">
        BB Glow är en hudförbättrande behandling som kombinerar microneedling-teknik med infärgande serum som innehåller pigment, vitaminer och hudvårdande ämnen. Behandlingen ger huden en jämnare ton, ökad lyster och en effekt som påminner om ett tunt lager BB-kräm – men utan makeup. Den passar utmärkt för att dölja ojämn hudton, rodnad, pigmentfläckar och ge en "glow-effekt".
      </p>
      <p>Under behandlingen används en microneedling-penna för att föra in BB Glow-serumet ytligt i huden. Behandlingen är ytlig och nästintill smärtfri. Hudtonen anpassas efter kundens egen nyans för ett naturligt resultat.
        Behandlingen inleds med en kemisk peeling och avslutas med en kylande aloe vera-mask samt en vårdande aloe vera-kräm.
</p>

      <h3 className="font-semibold text-lg mb-2 mt-8">Att tänka på efter behandlingen:</h3>
      <ul className="list-disc ml-5 mb-4 space-y-1">
        <li>Huden kan vara lätt rodnad och känslig det första dygnet.</li>
        <li>Undvik smink, bastu, träning och solexponering i minst 24–48 timmar.</li>
        <li>Tvätta inte ansiktet de första 24 timmarna för att låta serumet verka optimalt.</li>
        <li>Använd endast milda och återfuktande produkter utan parfym eller aktiva ingredienser i 3–5 dagar.</li>
      </ul>

<div className="flex items-center gap-2 mt-4 text-[#012840]">
  <FaClock className="text-xl" />
  <span className="font-semibold">45 minuter</span>
</div>
    </div>

    <div className="rounded overflow-hidden md:pl-20 pl-4 mt-10">
        <img src="/bb.glow..jpeg" alt="bbglow" className="rounded-lg shadow-md md:w-110 h-auto" />
            <a href="https://www.bokadirekt.se/places/a-clinic-60706" className="inline-block text-white bg-[#4287f5] font-bold text-lg hover:bg-[#c5c5c5] py-3 px-6 rounded transition md:ml-40 mt-6 ml-25 md:mt-10 md:w-auto text-center">
        Boka Nu
        </a>
    </div>
    </div>

  <section
  className="bg-fixed bg-cover bg-center text-black text-left py-40 px-4 mt-30 relative mb-40"
  style={{ 
    backgroundImage: "url('/bb.glow.jpeg')",
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)", }}
  >
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="bg-white/70 rounded-2xl p-6 sm:p-10 max-w-7xl mx-auto relative">
    <h3 className="text-xl sm:text-2xl font-bold mb-4">Varför kombinera Microneedling och BB Glow?</h3>
    
    <div className="text-sm sm:text-base space-y-4 leading-relaxed">
      <p>Att kombinera traditionell microneedling med BB Glow-behandling är ett effektivt sätt att både förbättra hudens struktur och ge en jämnare hudton med naturlig lyster.      </p>
    
    <h4 className="text-lg font-semibold">Fördelar med kombinationsbehandlingen:</h4>
    <ul className="list-disc list-inside space-y-2">
      <li>
          <strong>Hudförbättring på djupet:</strong> Microneedling stimulerar hudens egen produktion av kollagen och elastin, vilket stärker huden, minskar porer, fina linjer och ärr.
      </li>
      <li>
          <strong>Omedelbar glow-effekt:</strong> BB Glow tillför lätta pigment, vitaminer och näring som jämnar ut hudtonen och ger ett naturligt, strålande resultat.
      </li>
      <li>
          <strong>Bättre produktupptag:</strong> Microneedling skapar mikroskopiska kanaler i huden, vilket gör att BB Glow-serumet absorberas mer effektivt och ger ett mer långvarigt resultat.
      </li>
      <li>
          <strong>Dubbel effekt – inifrån och ut:</strong> Microneedling jobbar på hudens djupare lager medan BB Glow ger en kosmetisk förbättring på ytan. Tillsammans ger de både långsiktig hudhälsa och direkt visuell förbättring.
      </li>
      <p>Denna kombination är perfekt för dig som vill arbeta med hudens kvalitet på flera nivåer – både förbättra, förstärka och försköna – i en och samma behandling.</p>
    </ul>

<div className="flex items-center gap-2 mt-4 text-[#012840]">
  <FaClock className="text-xl" />
  <span className="font-semibold">80 minuter</span>
</div>

    </div>
</div>
</section>
 
    </div>
    </div>
  );
};
export default BBGlow;
