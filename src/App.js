import React from 'react';
import Form from "./components/Expense-Form";
import Chart from "./components/Expense-Chart";
import Total from "./components/Expense-Total";
import './App.css';

function App () {
return (
  <React.Fragment>
    <Chart />
    <Form />
    <Total />
  </React.Fragment>
)
}

export default App;
