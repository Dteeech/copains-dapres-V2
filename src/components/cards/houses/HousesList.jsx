import { useState } from 'react';
import HousesData from './Houses.json'; // Assurez-vous que ce chemin est correct
import HouseListItem from './HousesListItem';
import FilterBar from '../../categories/FilterBar';


const HousesList = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredHouses = selectedCategory
    ? HousesData.filter((house) => house.category === selectedCategory)
    : HousesData

    return (
      <div>
        <FilterBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 justify-items-center">
            {filteredHouses.map((house) => (
              <HouseListItem
                key={house.id}
                title={house.title}
                price={house.price}
                size={house.size}
                image={house.image}
                icons={house.icons}
              />
            ))}
          </div>
        </div>
      </div>
    )
};

export default HousesList;
