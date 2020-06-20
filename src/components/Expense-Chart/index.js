import React from "react";
import "./style.css";

function Chart(props) {

  let total = 0;
  props.expenses.forEach(expenses => {
    total = total + parseFloat(expenses.expenseAmount);
  });

  return (
    <>
      <div className="form col-md-5 d-flex justify-content-center">
        <table className="table">
          <thead className="bg-dark text-light col">
            <tr>
              <th>Expense Name</th>
              <th>Expense Amount</th>
            </tr>
          </thead>
          <tbody className="bg-light">
            {props.expenses.map(expenses => (
              <tr>
                <td>{expenses.expenseName}</td>
                <td>{expenses.expenseAmount}</td>
              </tr>
            ))}
          </tbody>
          <tr className="bg-light">
            <td colspan="2" className="pull-right">
              Total: ${total}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Chart;