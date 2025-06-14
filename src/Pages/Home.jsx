import React from "react";

const Home = () => {
    return (
        <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/salong.jpeg')" }}>
            <div className="bg-black/30 w-full px-15 py-32 md:py-90">
                
                {/* Text left */}
                <div className="flex-1 text-left">
                    <h2 className="text-white text-5xl font-bold mb-6">Välkommen till A Clinic</h2>
                    <p className="mb-8 text-white text-2xl max-w-md">
                        Vi erbjuder professionella behandlingar för din hälsa och skönhet
                    </p>
                    <a
                        href="https://www.bokadirekt.se/places/a-clinic-60706"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1b6080] text-white px-6 py-3 rounded font-semibold hover:bg-[#155066]"
                    >
                        Boka Tid
                    </a>
                </div>

                {/* Right: Image */}
              
            </div>
        </div>
    );
};

export default Home;
