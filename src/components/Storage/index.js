import React, { useState, useEffect } from "react";
import useLocalStorageState from 'use-local-storage-state'
import Form from "../Expense-Form";

useEffect((props) => {
    const [expenses, setExpenses] = useLocalStorageState('expenses', [
      expenseName,
      expenseAmount
    ])
  }),