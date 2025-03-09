
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

export default RestaurantCart;