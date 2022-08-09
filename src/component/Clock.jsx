import React, {useState, useEffect} from 'react';

const Clock = (props) => {
  const initialClock = {
    fecha: new Date(),
    edad: 0,
    nombre: "Michael",
    apellido: "Viloria"
  }

  const [initClock, setClock] = useState(initialClock);
  
  const tick = () => {
    setClock(() => {
      return {
        ...initClock,
        fecha: new Date(),
        edad: initClock.edad + 1
      }
    })
  }

  useEffect(() => {
    const setID = setInterval(() => tick(),1000)
    return () => {
      clearInterval(setID)
    }
  })


  return (
    <div>
      <h2>Hora actual: {initClock.fecha.toLocaleString()}</h2>
      <h3>{initClock.nombre} {initClock.apellido}</h3>
      <h1>Edad: {initClock.edad}</h1>
    </div>
  );
}

export default Clock;
