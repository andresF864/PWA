import React, { useState } from "react";
import PropTypes from "prop-types";
import { operaciones } from "../helpers/operaciones.js";
import Resultado from "./Resultado";

const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0,
  });
  const { handleChange, suma, resta, multi, division, numero1, numero2 } = operaciones(
    numeros,
    setNumeros
  );

  return (
    <div className="container">
      <h3>Calculadora</h3>
      <label htmlFor="numero1">Número 1: </label>
      <input
        name="numero1"
        value={numero1}
        onChange={handleChange}
        type="number"
      />
      <label htmlFor="numero2">Número 2: </label>
      <input
        name="numero2"
        value={numero2}
        onChange={handleChange}
        type="number"
      />
      <div className="result">
        <Resultado operacion="Suma" calculo={suma()} />
      </div>
      <div className="result">
        <Resultado operacion="Resta" calculo={resta()} />
      </div>
      <div className="result">
        <Resultado operacion="Multiplicación" calculo={multi()} />
      </div>
      <div className="result">
        <Resultado operacion="División" calculo={division()} />
      </div>
    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;