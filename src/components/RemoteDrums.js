
import ComparisonPlayer from './comparisonPlayer';
let cards = require("../assets/audioExamples.json");

function RemoteDrums() {
  return (
    <div className="">
        <h1>Remote Drum Sound Examples</h1>
        {cards.map((element) => {
          return (<ComparisonPlayer fdata={element} />)
        })
        }
    </div>
  );
}

export default RemoteDrums;