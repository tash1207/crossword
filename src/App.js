import ClueBar from './components/ClueBar'
import ClueList from './components/ClueList'
import Grid from './components/Grid'

function App() {
  return (
    <>
      <header>
        <h1>Crossword Puzzle</h1>
      </header>
      <div className="playArea">
        <div>
          <ClueBar />
          <Grid />
        </div>
        <ClueList title='Across' />
        <ClueList title='Down' />
      </div>
    </>
  );
}

export default App;
