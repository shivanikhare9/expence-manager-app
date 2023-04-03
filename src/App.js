import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import AmountSection from './components/AmountSection';
import ListGroup from './components/ListGroup';
import { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: 'Salary',
      amount: 100000,
    },
    {
      id: 2,
      text: 'Rent',
      amount: -25000,
    },
    {
      id: 3,
      text: 'Food',
      amount: -35000,
    }
  ]);

  // SaveTransaction
  const saveTransaction = (text, amount) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      text: text,
      amount: amount,
    };

    setTransactions([...transactions, newTransaction]);
  };

  return (
    <>
      <NavBar/>
      <div className='container'>
        <MainSection
          transactions={transactions}
          saveTransaction={saveTransaction}
        />
        <AmountSection transactions={transactions} />
        <ListGroup transactions={transactions} />
      </div>
    </>
  );
}

export default App;
