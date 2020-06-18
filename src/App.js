import React from "react";
import Form from "./components/Expense-Form";
import Chart from "./components/Expense-Chart";

class App extends React.Component {

  state = {
    expenseNames: [],
    expenseAmount: '',
    expenses: [],
  }

  addExpenseName = item => {
    this.setState({ expenseNames: [...this.state.expenseNames, item] })
   }

  addExpenseAmount = item => {
    this.setState({ expenseAmount: [...this.state.expenseAmount, item]})
  }

  render() {
    return (
      <div>
        <Form addExpense={this.addExpense} />
        <Chart addExpense={this.addExpense} />
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import Form from "./components/Expense-Form";
// import Chart from "./components/Expense-Chart";
// import './App.css';

// function App () {
// return (
//   <React.Fragment>
//     <Chart />
//     <Form />
//   </React.Fragment>
// )
// }

// export default App;
