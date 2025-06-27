import { ClockIcon } from "@heroicons/react/24/outline";

const BehandlingBox = ({ title, text, time, imgSrc, reverse }) => (
  <div className={`bg-gray-100 rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} `}>
    <img 
    src={imgSrc}
    alt={title}
    className="w-full md:w-1/2 h-60 md:h-auto object-cover" />

    <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between md:w-1/2">
    <div>
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-black">{title}</h3>
      <div className="text-sm sm:text-base text-gray-700 ">{text}</div>

    </div>
    {time && (
      <div className="mt-6 flex items-center gap-2 text-gray-600 font-medium">
        <ClockIcon className="h-5 w-5" />
        <span>{time}</span>
        </div>
    )}
    </div>

  </div>
)


const Behandling = () => {
  return (
<>
     <div className="w-full aspect-[15/6] bg-cover bg-[center_top_80%] bg-no-repeat" style={{
       backgroundImage: "url('/micro3.jpeg')",
       backgroundSize: "100%", 
       backgroundPosition: "center",}}>
            <div className="bg-black/35 w-full h-full flex items-center justify-center px-6 md:py-20">
                
                <div className="text-center">
                    <h2 className="text-white text-5xl md:text-6xl font-bold mb-20">Våra Behandlingar</h2>
                     <a
                        href="https://www.bokadirekt.se/places/a-clinic-60706"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#4287f5] text-xl px-8 py-3 rounded font-bold hover:bg-[#c5c5c5]"
                    >
                        Boka Tid
                    </a>
                </div>
            </div>
    </div>

        <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Box 1: Microneedling */}

        <BehandlingBox
          title="Microneedling + Kemisk Peeling"
          imgSrc="/micro.jpeg"
          time="45 minuter"
          text={
            <>
            <h2 className="text-xl font-bold mb-2">Hur går behandlingen till?</h2>
            <p className="mb-4">
              Microneedling är en avancerad hudföryngrande behandling som stimulerar hudens egen produktion av kollagen och elastin. Under behandlingen används en apparat med tunna, sterila nålar som skapar mikroskopiska nålstick i hudens översta lager. Dessa små kanaler triggar kroppens naturliga läkningsprocesser, vilket leder till förbättrad hudstruktur, minskade porer, jämnare hudton och reducerade linjer, ärr eller pigmenteringar. Behandlingen anpassas efter hudtyp och behov. 

            </p>

            <h3 className="text-lg font-semibold mb-2">Att tänka på före behandlingen:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Undvik solning och brun-utan-sol i minst 48 timmar före behandling.</li>
              <li>Du bör inte ha några aktiva hudinfektioner, öppna sår, feberblåsor eller inflammerad acne i det område som ska behandlas. (Behandlingen kan genomföras även om du har enstaka finnar) </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Att tänka på efter behandlingen:</h3>
            <ul className="list-disc list-inside">
              <li>Huden kan vara röd, varm och lätt svullen i upp till 48 timmar – detta är normalt och ett tecken på att huden läker.</li>
              <li>Undvik smink, träning, bastu och direkt solexponering i minst 24–48 timmar.</li>
              <li>Använd endast rekommenderade, lugnande produkter (utan parfym och aktiva syror) den första veckan.</li>
              <li>Solskydd är ett måste varje dag under minst 1–2 veckor efter behandlingen.</li>
              <li>Byt örngott och undvik att ta med händerna i ansiktet direkt efter behandling.</li>
              <li>Undvik vatten de första 24 timmarna efter behandligen. </li>
            </ul>
            </>
          }
  />
  
{/* Box 2: BB Glow */}

        <BehandlingBox
          title="BB Glow"
          imgSrc="/bb.glow.jpeg"
          time="45 minuter"
          text={
            <>
            <h2 className="text-xl font-bold mb-2">Hur går behandlingen till?</h2>
            <p className="mb-4">
              BB Glow är en hudförbättrande behandling som kombinerar microneedling-teknik med infärgande serum som innehåller pigment, vitaminer och hudvårdande ämnen. Behandlingen ger huden en jämnare ton, ökad lyster och en effekt som påminner om ett tunt lager BB-kräm – men utan makeup. Den passar utmärkt för att dölja ojämn hudton, rodnad, pigmentfläckar och ge en "glow-effekt".
            </p>
            <p className="mb-4">
              Under behandlingen används en microneedling-penna för att föra in BB Glow-serumet ytligt i huden. Behandlingen är ytlig och nästintill smärtfri. Hudtonen anpassas efter kundens egen nyans för ett naturligt resultat.
</p>
            
            <h3 className="text-lg font-semibold mb-2">Att tänka på efter behandlingen:</h3>
            <ul className="list-disc list-inside">
              <li>Huden kan vara lätt rodnad och känslig det första dygnet.</li>
              <li>Undvik smink, bastu, träning och solexponering i minst 24–48 timmar.</li>
              <li>Tvätta inte ansiktet de första 24 timmarna för att låta serumet verka optimalt.</li>
              <li>Använd endast milda och återfuktande produkter utan parfym eller aktiva ingredienser i 3–5 dagar.</li>
            </ul>
            </>
          }
  />         
       {/* Combo Box in the middle */}
        <ComboBox />
          

    {/* Box 3: Lashlift  */}

        <BehandlingBox
          title="Lashlift"
          imgSrc="/lashlift3.jpeg"
          time="45 minuter"
          text={
            <>
            <h2 className="text-xl font-bold mb-2">Böjda fransar med naturligt lyft</h2>
            <p className="mb-4">
              Lashlift är en skonsam behandling som lyfter och böjer dina egna naturliga fransar från roten, vilket ger intrycket av längre, fylligare och mer definierade fransar – helt utan fransförlängning. Behandlingen passar alla som vill framhäva sina ögon och slippa använda fransböjare eller mascara varje dag.
            </p>
            <p className="mb-4">
              Under behandlingen fästs fransarna varsamt mot en silikonform, och en speciell vätska appliceras som ger fransarna sin böj. Resultatet förstärks ofta med fransfärg, vilket gör att fransarna ser fylligare och mer markerade ut. Resultatet håller i ca 6–8 veckor beroende på fransarnas växtcykel
</p>
            
            <h3 className="text-lg font-semibold mb-2">Att tänka på efter behandlingen:</h3>
            <ul className="list-disc list-inside">
              <li>Undvik vatten, ånga, smink och att gnugga ögonen de första 24 timmarna.</li>
            </ul>
            </>
          }
  />    

{/* Box 4: Browlift  */}

        <BehandlingBox
          title="Browlift"
          imgSrc="/browlift.jpeg"
          time="30 minuter"
          text={
            <>
            <h2 className="text-xl font-bold mb-2">Formade och fylligare bryn</h2>
            <p className="mb-4">
              Browlift (även kallat brow lamination) är en behandling som ger brynen ett lyft, mer volym och en formbar struktur. Genom att mjuka upp brynstråna och kamma dem i önskad riktning kan man skapa ett symmetriskt, välvårdat och fylligare utseende – även på glesa eller svårformade bryn. Behandlingen avslutas oftast med färgning för ett komplett resultat. Browlift är perfekt för dig som vill ha ett mer markerat men naturligt uttryck, eller få dina bryn att hålla formen hela dagen – utan bryngel eller smink. Effekten varar i ca 4–6 veckor beroende på din hårväxt.
            </p>
            
            <h3 className="text-lg font-semibold mb-2">Att tänka på efter behandlingen:</h3>
            <ul className="list-disc list-inside">
              <li>Undvik vatten, ånga, smink och att gnugga ögonen de första 24 timmarna.</li>
              <li>Borsta brynen i form dagligen för bästa hållbarhet.</li>
            </ul>
            </>
          }
  />    

  </div>
</>

  )
};
export default Behandling;