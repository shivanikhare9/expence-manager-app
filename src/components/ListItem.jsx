import React from 'react'
import { FaTrash } from "react-icons/fa";
function ListItem({transaction}) {
  return (
    <li className="list-item">
    <span>
      <h3 className={transaction.amount > 0 ? "income-transaction" : "expense-transaction"}>₹{transaction.amount}</h3>
      <h4>{transaction.text}</h4>
    </span>
    <button className=" delbtn">
      <FaTrash/>
    </button>
  </li>
  )
}

export default ListItem
