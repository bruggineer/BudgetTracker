import React from "react";
import "./style.css";

function Chart(props) {
  console.log(props)
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
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Chart;

// function Chart(props) {

//   let expensesTotal = 0;

//   // // loop through expenses array, pull out each amount, parse to number, add to total
//   // for (var i = 0; i < expenseState.length; i++) {
//   //   let amount = expenseState[i].expenseAmount;
//   //   expensesTotal += parseFloat(amount);
//   // };

//   var totalSpent = expensesTotal.toFixed(2);

//   return (
//     <div> 
//         <li>{props.exspenceAmount}</li>     
//           <h6>Total Spent:</h6>
//           <h2 className="cost-number">${totalSpent}</h2>      
//     </div>
//   ); 
// }

// export default Chart;