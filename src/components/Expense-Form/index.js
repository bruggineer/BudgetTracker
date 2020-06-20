import React from "react";
import "./style.css";

function Form(props) {

  return (
    <div className="form col-md-2">
      <form onSubmit={props.handleFormSubmit}>
        <p className="heading">
          Welcome to Budget Tracker!
        </p>
        <div className="form-group">
          <input
            value={props.expenseName}
            name="expenseName"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Expense Name"
          />
          <input
            value={props.expenseAmount}
            name="expenseAmount"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Expense Amount (in dollars)"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Expense</button>
      </form>
    </div>
  )
};

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
