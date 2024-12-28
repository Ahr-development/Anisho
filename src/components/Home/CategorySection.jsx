

import React from 'react';

const CategorySection = () => {
  const cards = [
    { id: 1, imageUrl: 'https://media.istockphoto.com/id/1435116123/vector/black-friday-sale-sticker.jpg?s=612x612&w=0&k=20&c=saGZb65HJJCqPC5n-io9WunHyd-VNc1tvjdDvuI5PT0=' },
  // Add more cards as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 -mt-20 max-w-640:block hidden">
      {cards.map(card => (
        <div key={card.id} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <img src={card.imageUrl} alt={`Card ${card.id}`} className="w-full h-48 object-cover" />
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
