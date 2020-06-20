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
            <tr>
              <td>{props.expenseName}</td>
              <td>${props.expenseAmount}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>{props.expenses}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Chart;