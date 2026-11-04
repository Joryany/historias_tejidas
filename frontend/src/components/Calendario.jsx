
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
import "react-day-picker/style.css";
import '../css/componentes/calendario.css';

function Calendario({ fecha, setFecha }) {
  const [abierto, setAbierto] = useState(false);

  const fechaSeleccionada = fecha
    ? new Date(`${fecha}T12:00:00`)
    : undefined;

  const formatearFecha = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="ht-calendario">
      <button
        type="button"
        className="ht-calendario__campo"
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
      >
        <span>
          {fechaSeleccionada
            ? fechaSeleccionada.toLocaleDateString("es-CO", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "Escoger dia..."}
        </span>
        <span className="ht-calendario__icono" aria-hidden="true">
          ♡
        </span>
      </button>

      {abierto && (
        <div className="ht-calendario__panel">
          <DayPicker
            mode="single"
            selected={fechaSeleccionada}
            onSelect={(date) => {
              if (date) {
                setFecha(formatearFecha(date));
                setAbierto(false);
              }
            }}
            locale={es}
            disabled={{ before: new Date() }}
            showOutsideDays
            className="ht-daypicker"
            footer={
              fechaSeleccionada
                ? `Entrega deseada: ${fechaSeleccionada.toLocaleDateString("es-CO")}`
                : "Selecciona el día que deseas recibir tu pedido"
            }
          />

          <button
            type="button"
            className="ht-calendario__cerrar"
            onClick={() => setAbierto(false)}
          >
            Cerrar calendario
          </button>
        </div>
      )}
    </div>
  );
}

export default Calendario;
