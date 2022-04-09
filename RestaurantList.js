import React, { Fragment } from "react";
import AddRestaurant from "../../AddRestaurant";
import DeleteRestaurant from "../../DeleteRestaurant";
import RandomSelection from "../../RandomSelection";

const RestaurantList = ({ restaurants }) => {
  const handleCheckAll = () => {
    const inputs = document.querySelectorAll("input[type='checkbox']");
    inputs.forEach((input) => (input.checked = true));
  };

  const handleCheckNone = () => {
    const inputs = document.querySelectorAll("input[type='checkbox']");
    inputs.forEach((input) => (input.checked = false));
  };

  return (
    <Fragment>
      <div className="list-container">
        <div className="list">
          {restaurants.map((rest) => (
            <li key={rest.id}>
              <a
                className="rest-name"
                id="check"
                target="_blank"
                rel="noopener noreferrer"
                href={"http://www.google.com/search?q=" + rest.name + " utica"}
              >
                {rest.name}
              </a>
              <input
                className="rest-check"
                type="checkbox"
                name="restaurant"
                value={rest.name}
              ></input>
            </li>
          ))}
        </div>
        <div className="selectors">
          <button className="btn btn-light" onClick={handleCheckAll}>
            select all
          </button>
          <button className="btn btn-light" onClick={handleCheckNone}>
            deselect all
          </button>
        </div>
      </div>
      <div className="actions">
        <AddRestaurant />
        <DeleteRestaurant restaurants={restaurants} />
        <RandomSelection />
      </div>
    </Fragment>
  );
};

export default RestaurantList;
