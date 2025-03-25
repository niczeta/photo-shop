import { ReactNode } from "react";

export type CardProps = {
  cardImg: ReactNode;
  cardTitle: string;
  cardDescription?: string;
  price: string;
  onButtonClick?: () => void; // Optional callback function triggered when the button is clicked
};

export const Card = ({
  cardImg,
  cardTitle,
  cardDescription,
  price,
  onButtonClick,
}: CardProps) => {
  
  return (
    <div className="relative p-2.5 flex flex-col justify-center rounded-lg shadow-xl">
      {/* Image container */}
      <div className="w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
        {cardImg}
      </div>

      {/* Title section */}
      <h3 className="text-lg font-semibold uppercase mb-2 text-black">
        {cardTitle}
      </h3>

      {/* Optional description - only renders if cardDescription is provided */}
      {cardDescription && (
        <p className="text-sm text-gray-600 mb-4">
          {cardDescription}
        </p>
      )}

      {/* Price + button section */}
      <div className="content flex items-center justify-between">
        {/* Price tag with styled appearance */}
        <p className="text-white font-semibold bg-red-800 border-2 border-black rounded-md py-1 px-3 tracking-wider">
          {price}
        </p>

        {/* Button to add the item to the cart */}
        <button
          className="text-black border-2 border-black bg-white py-1 px-4 rounded-md uppercase font-medium transition duration-200 ease-in-out transform hover:bg-red-800 hover:text-white cursor-pointer"
          onClick={onButtonClick}> {/* Triggers the provided function when clicked */}
          Add to cart
        </button>
      </div>
    </div>
  );
};
