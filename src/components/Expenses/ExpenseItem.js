import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const temp = props.title;
  const [title, setTitle] = useState(props.title);

  const changeTitle=() =>{
    if (title === temp) {
      setTitle("Update");
    } else {
      setTitle(temp);
    }
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={changeTitle}>Click to change title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
