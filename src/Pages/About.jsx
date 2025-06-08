const About = () => {
  return (
    <div className="p-8 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 item-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Om A Clinic</h2>
          <p className="mb-4">
            På vackra Eriksberg i Göteborg hittar du <strong>A Clinic</strong>, en personlig skönhetssalong där kvalitet,
            trygghet och kundnöjdhet alltid står i fokus. Jag som driver salongen heter <strong>Alexandra</strong> och har
            arbetat inom skönhetsbranschen sedan 2020.</p>
            <p className="mb-4">
            Med flera års erfarenhet och ett brinnande intresse för hud och skönhet erbjuder jag behandlingar som är både
            resultatinriktade och skonsamma. Oavsett om du bokar microneedling, BB Glow, lashlift eller browlift – så är 
            mitt mål alltid att lyfta fram din naturliga skönhet och ge dig en stund av avslappning och egentid.
            </p>
            <p className="mb-4">
            Jag arbetar endast med noggrant utvalda, godkända produkter av hög kvalitet, och vidareutbildar mig kontinuerligt
            för att kunna erbjuda det bästa inom modern hudvård och skönhet.
            </p>
            <p className="mb-4">
            Hos mig är du i trygga händer – varje behandling anpassas efter just dina behov och önskemål.    
            </p>
            <p className="font-semibold italic">Så om du söker en trygg och professionell behandlare i en lugn och personlig miljö – varmt välkommen till A Clinic!<br />/ Alexandra</p>
        </div>
        
        <div className="flex justify-center">
          <img src="about.png" alt="" className="w-full h-auto rounded-lg shadow-lg max-w-sm"/>
        </div>
      </div>
      
    </div>
  );
};

export default About;
