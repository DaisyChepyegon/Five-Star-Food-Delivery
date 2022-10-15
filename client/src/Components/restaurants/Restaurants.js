import React, {useEffect, useState } from "react";
import Restaurant from './Components/restaurant/Restaurant';


function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);

    //adding the useEffect hook to initialize the side-effect event

    useEffect(() => {
        fetch("http://localhost:4000/restaurants")
        .then((response) => response.json())
        .then((restaurants) => {

            setRestaurants(restaurants)
        })
    }, []);

    let restaurant = (
        restaurants.map((restaurant) => (
            <div key={restaurant.id}>
                <p> Name: {restaurant.name}</p>
                <p>Location: {restaurant.location}</p>
                <Restaurant/>
            </div>
        ))
    )

    return (
        <div className="Restaurants">
            {restaurant}
        </div>
    );

}

export default Restaurants;