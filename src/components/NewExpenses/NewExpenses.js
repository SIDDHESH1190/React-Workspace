import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm.js";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  let [isEditing, setEditing] = useState(false);

  const startEditingHandler = () => {
    setEditing(true);
  };

  const onCancelHandler = () => {
    setEditing(false);
  };

  const SaveNewExpenseDataHandler = (NewEnteredExpenseData) => {
    const NewExpenseData = {
      ...NewEnteredExpenseData,
      id: Math.random().toString(),
    };

    props.onSaveNewExpenseData(NewExpenseData);

    setEditing(false)
  };

  let formContent = (
    <button onClick={startEditingHandler}>Add new expense</button>
  );

  if (isEditing) {
    formContent = (
      <NewExpenseForm
        onSaveNewExpenseData={SaveNewExpenseDataHandler}
        onCancel={onCancelHandler}
      ></NewExpenseForm>
    );
  }

  return <div className="new-expense">{formContent}</div>;
};

export default NewExpenses;
