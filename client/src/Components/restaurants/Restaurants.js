import React, {useEffect, useState } from "react";
import Restaurant from "../restaurant/Restaurant"



function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);
    const [popup, setPopup] = useState(false);

    function handleClick(){
      setPopup(!popup);
    }

    //adding the useEffect hook to initialize the side-effect event

    async function fetching(){
        await fetch("http://127.0.0.1:3000/restaurants")
        .then((response) => response.json())
        .then((restaurants) => {

            setRestaurants(restaurants)
        })
    }

    useEffect(() => {
       fetching()
    }, []);

    let restaurant = restaurants.map((restaurant) => (
            <div key={restaurant.id}>
                <img className='restaurant-image' src={restaurant.image} alt="sample" />
                <p> Name: {restaurant.name}</p>
                <p>Location: {restaurant.location}</p>
                <button onClick={handleClick}>Add a Restaurant</button>
            </div>
    ))
    

    return (
        <div className="Restaurants">
            {
                popup ? 
                <Restaurant/>
                :
                <div>{restaurant}</div>

            }
            
            
            
        </div>
    );

}

export default Restaurants;