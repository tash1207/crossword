import ClueBar from './components/ClueBar'
import ClueList from './components/ClueList'
import Grid from './components/Grid'

function App() {
  const Cell = (state, answer, number) => {
    return {
      state : state,
      answer : answer || '',
      number : number || '',
    }
  }

  const cells = [
    Cell('tile', 'G', '1'),
    Cell('tile', 'A', '2'),
    Cell('tile', 'T', '3'),
    Cell('tile', 'O', '4'),
    Cell('tile', 'R', '5'),
    Cell('tile', 'O', '6'),
    Cell('tile', 'R'),
    Cell('tile', 'A'),
    Cell('tile', 'T'),
    Cell('tile', 'E'),
    Cell('tile', 'B', '7'),
    Cell('tile', 'E'),
    Cell('tile', 'S'),
    Cell('tile', 'T'),
    Cell('block'),
    Cell('block'),
    Cell('tile', 'A', '8'),
    Cell('tile', 'H'),
    Cell('tile', 'E'),
    Cell('tile', 'M', '9'),
    Cell('block'),
    Cell('block'),
    Cell('tile', 'A', '10'),
    Cell('tile', 'R'),
    Cell('tile', 'T'),
  ];

  const Clue = (number, text) => {
    return {
      number,
      text,
    }
  }

  const acrossClues = [
    Clue('1', 'Florida mascot'),
    Clue('6', 'To speak formally'),
    Clue('7', 'Not the worst'),
    Clue('8', '[Clearing my throat]'),
    Clue('10', 'Something to hang on the wall'),
  ];

  const downClues = [
    Clue('1', 'Oldest Bluth brother'),
    Clue('2', 'Blackpink in your ___'),
    Clue('3', 'Author of this puzzle'),
    Clue('4', 'Hand-holding sea creature'),
    Clue('5', 'Common email abbr'),
    Clue('9', '___ Washington, song by Local Natives on the LiS soundtrack'),
  ];

  return (
    <>
      <header>
        <h1>Crossword Puzzle</h1>
      </header>
      <div className="playArea">
        <div>
          <ClueBar />
          <Grid cells={cells} />
        </div>
        <ClueList title='Across' clues={acrossClues} />
        <ClueList title='Down' clues={downClues} />
      </div>
    </>
  );
}

export default App;
