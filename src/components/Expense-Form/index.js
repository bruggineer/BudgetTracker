import React from "react";
import "./style.css";

class Form extends React.Component {
  state = {
    expenseName: '',
    expenseAmount: '',
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
    let amount = parseFloat(this.state.ExpenseAmount);

    expenses.push(amount);

    this.setState({...this.state, expenses: expenses, expenseName: this.state.expenseName, expenseAmount: this.state.expenseAmount })
    this.setState({
      expenseName: "",
      expenseAmount: ""
    })
  }

  render(){
    return (
      <div className="form">
        <form onSubmit={this.handleFormSubmit}>
        <p className="heading">
          Welcome to Budget Tracker!
        </p>
          <div className="form-group">
          <input
            value={this.props.expenseName}
            name="expenseName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Expense Name"
          />
          <input
            value={this.props.expenseAmount}
            name="expenseAmount"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Expense Amount (in dollars)"
          />
          </div>
          <button type="submit" className="btn btn-primary">Add Expense</button>
        </form>
      </div>
    )};
  }

export default Form;

// // //declare local storage for expenses and retrieve what's there, parsing it from JSON into an array
// // const storedExpenses = localStorage.getItem("storedExpenses")
// //   ? JSON.parse(localStorage.getItem("storedExpenses"))
// //   : [];


// function Form() {
//   const [expenseState, setExpenseState] = useState()
//   const [expenseDate, setExpenseDate] = useState();
//   const [expenseName, setExpenseName] = useState();
//   const [expenseAmount, setExpenseAmount] = useState();

//   const handleFormSubmit = event => {
//     event.preventDefault();

//     // Verify all fields contain data
//     if (!{expenseDate} || !{expenseAmount} || !{expenseName}) {
//       alert("Please enter data in all fields");
//     }

//     // Alert user of expense date, name, and amount then clear all
//     alert(`On ${expenseDate}, you spent ${expenseAmount} on ${expenseName}`);
//     this.setState({
//       expenseDate: "",
//       expenseName: "",
//       expenseAmount: ""
//     });
//   };

//   const setExpenseDate = this.state.expenseDate
//   const oneExpense = { expenseDate, expenseName, expenseAmount };

//   setExpenseState([...expenseState, oneExpense]);

//   // //store new expenses into storedExpenses in local storage
//   // useEffect(() => {
//   //   localStorage.setItem("storedExpenses", JSON.stringify(expenseState));
//   // }, [expenseState]);
  
//   return (
//     <form onSubmit={handleFormSubmit}>          
//           <div>
//             <label htmlFor={expenseDate}>Date:</label>
//             <input
//               className="form-control"
//               type="text"
//               placeholder="mm/dd/yyyy"
//               name="expenseDate"
//               id="expenseDate"
//               value={expenseDate}
//               onChange={e => setExpenseDate(e.target.value)}
//             />
//             <label htmlFor={expenseName}>Expense Name: </label>
//             <input
//               className="form-control"
//               type="text"
//               placeholder=''
//               name="expenseName"
//               id="expenseName"
//               value={expenseName}
//               onChange={e => setExpenseName(e.target.value)}
//             />
//             <label htmlFor={expenseAmount}>$ Amount: </label>
//             <input
//               className="form-control"
//               type="text"
//               placeholder=''
//               name="expenseAmount"
//               id="expenseAmount"
//               value={expenseAmount}
//               onChange={e => setExpenseAmount(e.target.value)}
//             />
//               <button className="btn btn-success" type="submit">
//                 Add Expense <i className="fas fa-plus"></i>
//               </button>
//           </div>
//     </form>
//   );
// }

// export default Form;
