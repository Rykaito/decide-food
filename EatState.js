import React, { Fragment, useState, useEffect } from 'react';
import RestaurantList from './RestaurantList';

const EatState = () => {
    const [restaurants, setRestaurants] = useState([]);

    async function getRestaurants() {
      const response = await fetch("/restaurants");
      const restaurantArray = await response.json();
      setRestaurants(restaurantArray)
    }

    useEffect(() => {
        getRestaurants();
      }, []);


    return (
        <Fragment>
            <RestaurantList restaurants={restaurants}/>
        </Fragment>
    )


}

export default EatState