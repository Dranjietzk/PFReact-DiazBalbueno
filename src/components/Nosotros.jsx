import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <p>En una ciudad con una creciente comunidad de jugadores, un grupo de
            amigos apasionados por los videojuegos fundó "Gaming House", un
            negocio online que ofrece un extenso catálogo de títulos clásicos y
            nuevos. Con un enfoque en el excelente servicio al cliente, se
            convirtió en un destino confiable para jugadores de todas las
            edades, brindando entretenimiento digital a nivel mundial.</p>
    </div>
  )
}

export default Nosotros