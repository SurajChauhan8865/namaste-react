import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const RestaurantCart = (props) => {
  const { url, restaurantName, cuisine, rating, time } = props?.restaurantDetails;
  return (
    <div className='restaurant-cart' style={{ backgroundColor: "#f0f0f0" }}>
      <img className='restaurant-cart-img' alt='res-cart-img'
        src={url} />
      <h4 className='cart-heading'>{restaurantName}</h4>
      <h5>{cuisine}</h5>
      <h5>{rating}</h5>
      <h5>{time}</h5>
    </div>
  )
}

const restaurantData = [
  {
    url: 'https://hellomealsonme.com/blogs/wp-content/uploads/2022/09/Blog-Img_01.jpg',
    restaurantName: "Meghana Foods",
    cuisine: "Biryani, North Indian, Asian",
    rating: "4.4 stars",
    time: "38 minutes"
  },
  {
    url: 'https://images.pexels.com/photos/1639564/pexels-photo-1639564.jpeg',
    restaurantName: "Spice Symphony",
    cuisine: "Indian, Continental",
    rating: "4.6 stars",
    time: "45 minutes"
  },
  {
    url: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    restaurantName: "Sushi Delight",
    cuisine: "Japanese, Seafood",
    rating: "4.8 stars",
    time: "30 minutes"
  },
  {
    url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
    restaurantName: "Pasta Paradise",
    cuisine: "Italian, European",
    rating: "4.5 stars",
    time: "35 minutes"
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    restaurantName: "Burger Heaven",
    cuisine: "American, Fast Food",
    rating: "4.2 stars",
    time: "25 minutes"
  },
  {
    url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    restaurantName: "Taco Fiesta",
    cuisine: "Mexican, Street Food",
    rating: "4.3 stars",
    time: "40 minutes"
  }
];

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>
        Search...
      </div>
      <div className='restaurant-container'>
        {restaurantData?.map((restaurant) => <RestaurantCart key= {restaurant?.restaurantName} restaurantDetails={restaurant} />)}
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);