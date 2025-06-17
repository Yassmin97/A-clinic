import React from "react";

const Home = () => {
    return (
        <div className="w-full h-screen bg-cover bg-[center_top_80%] bg-no-repeat" style={{ backgroundImage: "url('/salong.jpeg')" }}>
            <div className="bg-black/45 w-full px-20 py-32 md:py-40">
                
                {/* Text left */}
                <div className="flex-1 text-left pl-16 md:pl-24">
                    <h2 className="text-white text-6xl font-bold mb-6">Välkommen till A Clinic</h2>
                    <p className="mb-8 text-white text-3xl max-w-md">
                        Vi erbjuder professionella behandlingar för din hälsa och skönhet
                    </p>
                    <a
                        href="https://www.bokadirekt.se/places/a-clinic-60706"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#4287f5] text-xl px-6 py-4 rounded font-bold hover:bg-[#c5c5c5]"
                    >
                        Boka Tid
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
