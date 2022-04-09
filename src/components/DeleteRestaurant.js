import React, { Fragment } from "react";

const DeleteRestaurant = ({ restaurants }) => {
  const deleteRestaurant = async (id) => {
    try {
      await fetch(`https://restlist.herokuapp.com/restaurants/${id}`, {
        method: "DELETE",
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = () => {
    const sel = document.getElementById("choice").value;
    deleteRestaurant(sel);
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-danger"
        data-toggle="modal"
        data-target="#exampleModal2"
      >
        Remove Restaurant
      </button>
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Select a Restaurant to Remove
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <select
                  className="custom-select"
                  id="choice"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT">Choose...</option>
                  {restaurants.map((rest) => (
                    <option key={rest.id} value={rest.id}>
                      {rest.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DeleteRestaurant;
