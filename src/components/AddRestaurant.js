import React, { Fragment, useState } from "react";

const AddRestaurant = () => {
  const [name, setName] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name };
      await fetch("https://restlist.herokuapp.com/restaurants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/decide-food";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add Restaurant
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter Your Restaurant Of Choice
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
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={onSubmitForm}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddRestaurant;
