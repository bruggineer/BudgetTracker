import React from "react";
import Form from "./components/Expense-Form";
import Chart from "./components/Expense-Chart";

class App extends React.Component {

  state = {
    expenseAmount: '',
    expenseName: '',
    expenses: []
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    let expenses = this.state.expenses;
    this.setState({ ...this.state, expenses: expenses.concat(this.state.expenseAmount), expenseName: this.state.expenseName, expenseAmount: this.state.expenseAmount })
    this.expenseName.value = "";
    this.expenseAmount.value = "";

    let amountTotal = (this.state.expenses).reduce((totalSpent, expense) => totalSpent + parseInt(this.state.expense, 10), 0);

    alert("You spent $" + this.state.expenseAmount + " on " + this.state.expenseName + "expenses: " + this.state.expenses + amountTotal);
    this.setState({
      expenseName: "",
      expenseAmount: ""
    })
  };

  render() {
    return (
      <div>
        <Form />
        <Chart />
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
