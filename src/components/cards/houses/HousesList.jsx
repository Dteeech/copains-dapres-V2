/*import { useState } from 'react'
import HousesData from './Houses.json'
import HouseListItem from './HousesListItem'
import FilterBar from '../../categories/FilterBar'
import { getAdvertsApi } from '../../../services/api'


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
}

export default HousesList
*/

import { useEffect, useState } from 'react'
import HouseListItem from './HousesListItem'
import FilterBar from '../../categories/FilterBar'
import { getHouseShareApi } from '../../../services/api'
import location1 from '/public/location_1.webp';


const HousesList = () => {
  const [housesData, setHousesData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    const getData = async () => {
      const response = await getHouseShareApi()
      console.log(response.result)
      setHousesData(response.result)
    }
    getData()
  }, [])

  const filteredHouses = selectedCategory
    ? housesData.filter((house) => house.category === selectedCategory)
    : housesData
  
  return (
    <div>
      <FilterBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 justify-items-center">
          {filteredHouses.map((house) => (
            <HouseListItem
              houseKey={house.id_houseshare}
              title={house.title}
              size={house.surface_area}
              price={house.rent}
              image={location1}
              icons={
                {
                  'heart': '/assets/images/icons/heart.svg',
                  'photoIcon': "/assets/images/icons/photo-icon.svg",
                  'city': '/assets/images/icons/city.svg'
                }
                }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HousesList
