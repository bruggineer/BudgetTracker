import React from "react";
import Wrapper from "./components/Wrapper";
import Row from "./components/Row";
import Form from "./components/Expense-Form";
import Chart from "./components/Expense-Chart";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseAmount: '',
      expenseName: '',
      expenses: []
    }
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.setState({
      expenses: [...this.state.expenses, {
        expenseAmount: this.state.expenseAmount,
        expenseName: this.state.expenseName,
      }],
    })
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Row>
            <Form expenseAmount={this.expenseAmount} expenseName={this.expenseName} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />
            <Chart expenses={this.state.expenses} />
          </Row>
        </Wrapper>
      </div>
    )
  }
};

export default App;