import React from "react";
import "./style.css";

function Chart(props) {
  return (
    <>
      <div>
        <table className="table">
          <thead className="bg-dark text-light">
            <tr>
              <th>Expense Name</th>
              <th>Expense Amount</th>
            </tr>
          </thead>
          <tbody>
          {this.props.expenseName.map(name => (
            <tr>
            <td>{name.expenseName}</td>                           
            </tr>
            ))};
            {this.props.expenseAmount.map(amount => (
            <tr>
              <td>${amount.expenseAmount}</td>
            </tr>
            ))};
            {this.props.expenses.map(total => (
            <tr>
              <td>Total:</td>
              <td>{total.expenses}</td>
            </tr>
            ))};
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Chart;