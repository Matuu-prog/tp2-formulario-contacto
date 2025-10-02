import React from "react";
import { servicios } from "../data/servicios";

function Servicios() {
  return (
    <div>
      <h1>Servicios</h1>
      <div className="servicios-lista">
        {servicios.map(s => (
          <div key={s.id} className="servicio-card">
            <img src={s.imagen} alt={s.nombre} />
            <h2>{s.nombre}</h2>
            <p>{s.descripcion}</p>
            <p>Precio: ${s.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;