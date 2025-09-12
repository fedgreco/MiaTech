import { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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

  const handleInput = (event) => {
    console.log(event.target.value);
  }

  const handleFormInput = (event) => {
    const { name, value, type } = event.target;

    setForm((_form) => ({
      ..._form,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Email: ${form.email}\nPassword: ${form.password}`);

    setForm({
      email: "",
      password: "",
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
      <input type="text" onInput={handleInput}></input>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={form.email} onInput={handleFormInput} placeholder="Inserisci la tua email"></input>
        <input type="password" name="password" value={form.password} onInput={handleFormInput} placeholder="Inserisci la tua password"></input>
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default App;