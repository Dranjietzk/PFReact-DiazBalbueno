import React, { useState } from 'react'

const Titulo = ({ texto, numero }) => {
    const [newNumber, setNewNumber] = useState(numero);

    const titleChange = () => {
        setNewNumber(newNumber - 1);
    }
  return (
    <div>
    {texto} {newNumber}
    <button onClick={titleChange}> Cambia el título </button>
    </div>
  );
};

export default Titulo;
