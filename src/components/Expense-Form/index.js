import React from "react";
import "./style.css";

function Form(props) {

  return (
    <div className="form col-md-5 d-flex justify-content-center">
      <form onSubmit={props.handleFormSubmit}>
        <div className="text-light">
          <h3 className="heading">
            Expense Tracker
        </h3>
          <p>Enter an expense category and the amount spent</p>
        </div>

        <div className="form-group">
          <input
            value={props.expenseName}
            name="expenseName"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Expense Category"
            autoComplete="off"
          />
          <input
            value={props.expenseAmount}
            name="expenseAmount"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Expense Amount"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Expense</button>
      </form>
    </div>
  )
};

export default Form;