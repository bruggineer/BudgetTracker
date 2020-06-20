import React, { Component } from "react";
import Form from "./components/Expense-Form";
import Chart from "./components/Expense-Chart";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseAmount: '',
      expenseName: '',
      expenses: 0
    }
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    console.log(value)
    this.setState({
      [name]: value
    });
  };

  calcExpenses = (state => {
    this.setState((state, props) => {
      console.log(this.state.expenseAmount)
      console.log(this.state.expenses)
      return {
        expenses: ((this.state.expenses) + parseFloat(this.state.expenseAmount))
      }
    })
  });

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.setState({ expenseAmount: e.target.value });
    this.setState({ expenseName: e.target.value });
    this.setState({expenses: this.calcExpenses()})
    
    console.log(this.state.expenseAmount);
    console.log(this.state.expenseName);
    console.log(this.state.expenses);

    this.setState({
      expenseName: "",
      expenseAmount: ""
    })
  };

  render() {
    return (
      <div>
        <Form expenseAmount={this.expenseAmount} expenseName={this.expenseName} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />
        <Chart expenseAmount={this.expenseAmount} expenseName={this.expenseName} expenses={this.expenses} />
      </div>
    )
  }
};

export default App;

// this.setState({expenses: expenses})
  // //this.setState({expenses: ((this.state.expenses) + parseFloat(this.state.expenseAmount))});
  // this.setState((state, props) => ({
  //   expenses: state.expenses + props.expenseAmount,
  // }));
  //   this.setState({
  //     expenses: [...this.state.expenses, expenseAmount]
  //   })
  //   console.log(expenses);
  //   var sum = expenses.reduce(function(a, b){
  //     return a + b;
  // }, 0);

  // console.log(sum);
  // this.setState({ ...this.state, expenses: [...expenses, (parseFloat(this.state.expenseAmount))], expenseName: this.state.expenseName, expenseAmount: this.state.expenseAmount })
  // //let amountTotal = (this.state.expenses).reduce((amountTotal, expense) => amountTotal + expense);
  // //let amountTotal = expenses.reduce((getSum(total, num), 0), => { return total + Math.round(num)}
  // var amountTotal = expenses.reduce((total, item) => item.data.reduce(getSum, total), 0);
  // console.log(amountTotal);
