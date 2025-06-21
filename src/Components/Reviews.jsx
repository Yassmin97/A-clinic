import React from 'react';
import { UserIcon, StarIcon } from '@heroicons/react/24/solid';

const reviews = [
  {
    name: "Priskilla S",
    date: "2025-06-21",
    text: "Detta var min första tillfälle och jag uppskattar när man berättar vad man gör och när under behandlingen. När rodnade försvunnit dar efter såg jag en stor förbättring på mörka ringar och pigmentet fläckar och en allmän uppstramning av huden, underbart! Väldigt professionellt! Ser fram emot kommande behandlingar.",
    rating: 5
  },
{
    name: "Michelle H",
    date: "2025-05-06",
    text: "Supernöjd med min lash- och browlift! Fin salong, trevlig behandlare och resultat blev precis som jag ville. Rekommenderar varmt!",
    rating: 5
  },
  {
    name: "Maja L",
    date: "2025-05-20",
    text: "Supergullig &amp; duktig tjej ❤️",
    rating: 5
  },
  {
    name: "Phuong T",
    date: "2025-04-17",
    text: "Jättemycket bra 👍 ",
    rating: 5
  },
  {
    name: "Klara H",
    date: "2025-04-15",
    text: "Jättefint bemötande och resultat! Kommer definitivt tillbaka.",
    rating: 5
  },
  {
    name: "Cathleen C",
    date: "2025-04-12",
    text: "It is an amazing deal to do Lash Lift and Brow lift in her salon. Her salon is next to the No. 47 door. She shared the space with other shops. I am trying to get used to the look of the brow lift, it is the first time I did this. My boyfriend loves the Lash Lift, he said that it is better than the one I did in Singapore. The payment is only Swish.",
    rating: 5
  },
  {
    name: "Narin S",
    date: "2025-03-15",
    text: "Bäst!",
    rating: 5
  },
  {
    name: "Cassandra F",
    date: "2025-03-09",
    text: "Kände mig så trygg i Alexandras händer, väldigt nöjd med microneedling såg resultat direkt☺️",
    rating: 5
  },
  {
    name: "rebecka n",
    date: "2025-02-19",
    text: "Nöjd med både besöket och resultatet på behandlingen. Hon var väldigt bra på det hon gör och utöver det professionell och snäll! 5/5 ⭐️⭐️⭐️⭐️⭐️",
    rating: 5
  },
  {
    name: "Ella R",
    date: "2025-01-15",
    text: "Super duktig och trevlig!",
    rating: 5
  },
];

const Reviews = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">Vad Våra Kunder Säger</h2>
      
      <div className="flex overflow-x-auto space-x-6 pb-4 no-scrollbar">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-xs bg-gray-100 p-6 rounded-xl shadow-md flex-shrink-0"
          >
            <div className="flex items-start space-x-3 mb-1">
              <div className="bg-gray-300 rounded-full p-2">
                <UserIcon className="h-6 w-6 text-white" />
              </div>
              <div>
              <h4 className="text-lg font-semibold">{review.name}</h4>
              <p className="text-xs text-gray-500">{review.date}</p>
            </div>
            </div>
            <div className="flex text-yellow-500 mb-3">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
