import React, { Fragment } from "react";

const RandomSelection = () => {
  const handleCheck = () => {
    const check = document.querySelectorAll('input[name="restaurant"]:checked');
    let choices = [];
    check.forEach((checkbox) => {
      choices.push(checkbox.value);
    });
    const roll = Math.floor(Math.random() * choices.length);
    let result = choices[roll];
    if (choices.length < 2) {
      result = "select a few restaurants";
    }
      document.getElementById("result").innerHTML = result;
  };

  return (
    <Fragment>
      <button
        className="btn btn-secondary"
        onClick={handleCheck}
        data-toggle="modal"
        data-target="#resultmodal"
      >
        Take Your Chance
      </button>
      <div
        class="modal fade"
        id="resultmodal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body mb-result">
              <h1 id="result">result</h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default RandomSelection;
