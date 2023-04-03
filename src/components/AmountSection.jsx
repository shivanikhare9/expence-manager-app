import React from 'react'

function AmountSection({transactions}) {
  
  const totalIncome = transactions.filter(item => item.amount > 0).reduce((p,c)=>{
    return p+c.amount
  },0)
  
  const totalExpense = transactions.filter(item => item.amount < 0).reduce((p,c)=>{
    return p+c.amount
  },0)
  
  
  return (
    <div id="current-status" className="main-section">
    <div id="income" className="balance">
      <span>
        <p>Current Income</p>
        <h1>₹{totalIncome}</h1>
      </span>
    </div>

    <div id="expense" className="balance">
      <span>
        <p>Current Expense</p>
        <h1>₹{totalExpense}</h1>
      </span>
    </div>
  </div>

  )
}

export default AmountSection
