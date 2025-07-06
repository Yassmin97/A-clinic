import React from "react";
import { Link } from "react-router-dom";
import Reviews from '../Components/Reviews';


const Home = () => {
    return (
         <>
    <div className="w-full aspect-[3/1] bg-cover bg-[center_top_80%] bg-no-repeat" style={{ backgroundImage: "url('/salong-bg.jpeg')" }}>
    <div className="bg-black/45 w-full h-138 px-20 md:px-20 py-32 md:py-40">
  
      
      {/* Text */}
      <div className="flex-1 text-left md:text-left px-1 sm:px-8 md:pl-16">
        <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Välkommen till A Clinic
        </h2>
        <p className="mb-8 text-white sm:text-base md:text-2xl">
          Vi erbjuder professionella behandlingar för din hälsa och skönhet
        </p>
        <a
          href="https://www.bokadirekt.se/places/a-clinic-60706"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#4287f5] text-base sm:text-lg md:text-xl px-6 py-3 rounded font-bold hover:bg-[#c5c5c5]"
        >
          Boka Tid
        </a>
      </div>

    </div>
  </div>

        <div className="py-20 px-8 bg-white text-gray-800">
            <h3 className="text-4xl font-bold text-center mb-12">Våra Behandlingar</h3>

            <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

            <Link to="/Behandling/Microneedling" className="block">
                <div className="bg-gray-100 rounded-lg shadwo p-2 text-center">
                    <img src="/micro.jpeg" alt="Microneedling" className="w-full h-65 object-cover rounded mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Microneedling</h4>
                    <p className="text-sm mb-3"> Stimulerar hudens kollagenproduktion för en jämnare, fastare hud.</p>
                </div></Link>

            <Link to="/Behandling/BBGlow" className="block">
                <div className="bg-gray-100 rounded-lg shadwo p-2 text-center">
                    <img src="/bb.glow.jpeg" alt="BB Glow" className="w-full h-65 object-cover object-bottom rounded mb-4" />
                    <h4 className="text-xl font-semibold mb-2">BB Glow</h4>
                    <p className="text-sm mb-3">Ger huden en jämn och strålande ton med naturligt glow.</p>
                </div></Link>

            <Link to="/Behandling/Lashlift" className="block">
                <div className="bg-gray-100 rounded-lg shadwo p-2 text-center">
                    <img src="/lashlift2.jpeg" alt="Lashlift" className="w-full h-65 object-cover object-bottom rounded mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Lashlift</h4>
                    <p className="text-sm mb-3">Böjer dina naturliga fransar för ett piggt och öppet intryck.</p>
                </div></Link>


            <Link to="/Behandling/Browlift" className="block">
                <div className="bg-gray-100 rounded-lg shadwo p-2 text-center">
                    <img src="/browlift.jpeg" alt="Browlift" className="w-full h-65 object-cover rounded mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Browlift</h4>
                    <p className="text-sm mb-3">Formar och fixerar brynen för en lyft och definierad look.</p>
                </div></Link>
            </div>
        </div>

        <section className="bg-fixed relative bg-center bg-cover text-white text-center py-32 px-4" style={{backgroundImage: "url('/bb.glow.jpeg')"}}>
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="relative z-10">
        <h2 className="text-5xl font-bold mb-4 text-white">BOKA IDAG</h2>
        <p className="text-lg mb-4 font-semibold">Vill du boka en behandling eller har en fråga?</p>
        <p className="text-lg mb-8 font-semibold">Ring in till oss eller Boka direkt</p>

        <div className="flex justify-center gap-4 flex-wrap">
            <a href="tel:070-3504310" className="bg-white text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow hover:shadow-lg">
                <i className="fas fa-phone">070-3504310</i>
            </a>

            <a href="https://www.bokadirekt.se/places/a-clinic-60706" target="_blank" rel="noopener noreferrer" 
            className="border border-white text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">

                Boka Direkt <span>&raquo;</span>
            </a>
        </div>
      </div>
        </section>
        <Reviews />
       

        
         </>
    );
};

export default Home;
