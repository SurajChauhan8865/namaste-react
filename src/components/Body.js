import RestaurantCart from "./RestaurantCart";
import { restaurantData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [data, SetData] = useState(restaurantData);
  
  return (
    <div className='body'>
      <div className='filter'>
        <button className="filter-btn" onClick={() => {
          resData = data.filter((data) => parseFloat(data.rating) > 4)
          SetData(resData);
        }}>Top Rated Restaurants</button>
      </div>
      <div className='restaurant-container'>
        {data?.map((restaurant) => <RestaurantCart key={restaurant?.restaurantName} restaurantDetails={restaurant} />)}
      </div>
    </div>
  )
}


export default Body;