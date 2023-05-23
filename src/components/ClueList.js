const ClueList = ({ title, clues }) => {
  return (
    <div className="clueList">
      <div className="clueListTitle">{title}</div>
      {clues.map((clue, index) => (
        <div className="clueListClue">{clue.number} {clue.text}</div>
        ))}
    </div>
    )
}

export default ClueList;
