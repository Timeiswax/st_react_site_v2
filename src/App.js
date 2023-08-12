import logo from './logo.svg';
import './App.css';
import ComparisonPlayer from './components/comparisonPlayer';
import Navbar from './components/navbar';
let cards = require("./assets/audioExamples.json");

function App() {
  return (
    <div className="App-body">
      <Navbar />
      <div className="SoundCards" >
        <h1>Remote Drum Sound Examples</h1>
{/*         <ComparisonPlayer fdata={cards[0]} />
 */}
        {cards.map((element) => {
          return (<ComparisonPlayer fdata={element} />)
        })
        }
      </div>
    </div>
  );
}

export default App;