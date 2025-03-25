import { Card } from "../components/Card";

export const Bodies = () => {
  
  const bodiesCard = [
    { img: "/camera.png", title: "Body number 1", price: "$899" },
    { img: "/camera.png", title: "Body number 2", price: "$899" },
    { img: "/camera.png", title: "Body number 3", price: "$899" },
    { img: "/camera.png", title: "Body number 4", price: "$899" },
    { img: "/camera.png", title: "Body number 5", price: "$899" },
    { img: "/camera.png", title: "Body number 6", price: "$899" },
    { img: "/camera.png", title: "Body number 7", price: "$899" },
    { img: "/camera.png", title: "Body number 8", price: "$899" },
    { img: "/camera.png", title: "Body number 9", price: "$899" },
    { img: "/camera.png", title: "Body number 10", price: "$899" },
  ];

  return (
    <section id="bodies" className="min-h-screen py-22 md:py-18 lg:py-20">
      {/* Title section */}
      <h1 className="text-center text-3xl uppercase font-bold text-red-700">
        Popular bodies
      </h1>

      {/* Cards grid */}
      <div className="px-12 gap-12 grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-5">
        {bodiesCard.map((bodyCard, index) => (
          <div key={index} className="col-span-1">
            <Card
              cardImg={<img src={bodyCard.img} alt={bodyCard.title} className="w-full h-full object-cover p-8" />}
              cardTitle={bodyCard.title}
              price={bodyCard.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
