import { Card } from "../components/Card";

export const Lenses = () => {
  
  const lensesCard = [
    { img: "/lens.png", title: "Lens number 1", price: "$899" },
    { img: "/lens.png", title: "Lens number 2", price: "$899" },
    { img: "/lens.png", title: "Lens number 3", price: "$899" },
    { img: "/lens.png", title: "Lens number 4", price: "$899" },
    { img: "/lens.png", title: "Lens number 5", price: "$899" },
    { img: "/lens.png", title: "Lens number 6", price: "$899" },
    { img: "/lens.png", title: "Lens number 7", price: "$899" },
    { img: "/lens.png", title: "Lens number 8", price: "$899" },
    { img: "/lens.png", title: "Lens number 9", price: "$899" },
    { img: "/lens.png", title: "Lens number 10", price: "$899" },
  ];

  return (
    <section id="lenses" className="min-h-screen py-22 md:py-18 lg:py-20">
      {/* Title section */}
      <h1 className="text-center text-3xl uppercase font-bold text-red-700">
        Popular lenses
      </h1>

      {/* Cards grid */}
      <div className="px-12 gap-12 grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-5">
        {lensesCard.map((lensCard, index) => (
          <div key={index} className="col-span-1">
            <Card
              cardImg={<img src={lensCard.img} alt={lensCard.title} className="w-full h-full object-cover p-8"/>}
              cardTitle={lensCard.title}
              price={lensCard.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
