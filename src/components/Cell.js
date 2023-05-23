const Cell = ({ cell }) => {
  return (
    <div className={`cell ${cell.state}`}>
      <span className="cellNumber">{cell.number}</span>
      <span className="cellLetter">{cell.answer}</span>
    </div>
    )
}

export default Cell;