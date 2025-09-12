import { useState, useEffect } from "react";

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

  const handleResetButton = () => {
    setCounter((_counter) => {
      return _counter = 0;
    })
  }

  useEffect(() => {
  }, [counter]);

  return (
      <div>
        <h1>
          Titolo che si aggiorna con il valore di counter: {counter}
        </h1>
        <button onClick={handleAddButton}>ADD</button>
        <button onClick={handleSubButton}>SUB</button>
        <button onClick={handleResetButton}>RESET</button>
        <p>
          Counter: {counter}
        </p>
      </div>
  )
}

export default App;