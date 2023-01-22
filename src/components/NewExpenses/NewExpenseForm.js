import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [EnteredTitle, SetEnteredTitle] = useState("");

  const [EnteredPrice, SetEnteredPrice] = useState("");

  const [EnteredDate, SetEnteredDate] = useState("");

  const TitleHandler = (event) => {
    SetEnteredTitle(event.target.value);
  };
  const PriceHandler = (event) => {
    SetEnteredPrice(event.target.value);
  };
  const DateHandler = (event) => {
    SetEnteredDate(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();

    const NewEnteredExpenseData = {
      title: EnteredTitle,
      amount: +EnteredPrice,
      date: new Date(EnteredDate),
    };

    SetEnteredTitle("");
    SetEnteredDate("");
    SetEnteredPrice("");

    props.onSaveNewExpenseData(NewEnteredExpenseData);
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={TitleHandler}
            value={EnteredTitle}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            onChange={PriceHandler}
            value={EnteredPrice}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2000-01-01"
            max="2021-06-13"
            onChange={DateHandler}
            value={EnteredDate}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
