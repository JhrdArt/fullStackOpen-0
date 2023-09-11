import { useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [addTexto, setAddText] = useState([]);



  const handleChange = (e) => {
    const value = e.target.value;
    setTexto(value);
  };

  const onSubmitValue = (e) => {
    e.preventDefault();

    setAddText(tarea => [...tarea, texto])
  };

  return (
    <>
      <form onSubmit={onSubmitValue} className="form">
        <label htmlFor="Save">Add your text</label>
        <input
          onChange={handleChange}
          value={texto}
          type="text"
          placeholder="agregar"
        />
        <button >Submit</button>
      </form>
      <ul className="form__ul">
        {
          addTexto.map(texto =>(
            <li key={texto.length}  className="">{texto}</li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
