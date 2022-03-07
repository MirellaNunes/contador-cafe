import { useState } from "react";
import style from "./index.module.css";

function App() {
  const [number, setNumber] = useState(0);

  function somar() {
    setNumber(number + 1);
  }
  function zero() {
    setNumber(0);
  }
  function menos() {
    setNumber(number - 1);
  }

  return (
    <div className={style.contador}>
      <div className={style.titulo}>
        <h1> Contador de Café </h1>
      </div>
      <div className={style.numero}>
        <p>{number}</p>
      </div>
      <div className={style.botao}>
        <button onClick={somar}>somar</button>
        <button onClick={zero}>resetar</button>
        <button onClick={menos}>subtrair</button>
      </div>
    </div>
  );
}

export default App;
