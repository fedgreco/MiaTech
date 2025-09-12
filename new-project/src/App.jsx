import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleAddButton = () => {
    setCounter((_counter) => {
      return _counter + 1;
    })
  }

  const handleSubButton = () => {
    setCounter((_counter) => {
      return _counter - 1;
    })
  }

  return (
      <div>
        <button onClick={handleAddButton}>ADD</button>
        <button onClick={handleSubButton}>SUB</button>
        <p>
          Counter: {counter}
        </p>
      </div>
  )
}

export default App;