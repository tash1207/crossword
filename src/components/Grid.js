import Cell from './Cell'

const Grid = ({ cells }) => {
  return (
    <div className="grid">
      {cells.map((cell, index) => (
        <Cell key={index} cell={cell} />
        ))}
    </div>
    )
}

export default Grid;
