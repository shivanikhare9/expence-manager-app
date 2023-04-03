import ListItem from './ListItem'

function ListGroup({transactions}) {
  return (
    <ul className="list-group">
      {
        transactions.map(transaction => <ListItem transaction={transaction} key={transaction.id} />)
      }
  </ul>
  )
}

export default ListGroup
