import {Tooltip} from './Tooltip';

function App() {
  return (
    <div className="App">
      <button>Click Me</button>
      <Tooltip text={"Hello! thank you for pressing me"}>
       <span class="material-symbols-outlined">info</span>
      </Tooltip>
    </div>
  );
}

export default App;
