import React from "react";
import "./style.css";

function Chart({ expenses }) {

  let expensesTotal = 0;

  // loop through expenses array, pull out each amount, parse to number, add to total
  for (var i = 0; i < expenses.length; i++) {
    let amount = expenses[i].expenseAmount;
    expensesTotal += parseFloat(amount);
  };

  var totalSpent = expensesTotal.toFixed(2);

  return (
    <div>      
          <h6>Total Spent:</h6>
          <h2 className="cost-number">${totalSpent}</h2>      
    </div>
  ); 
}

export default Chart;