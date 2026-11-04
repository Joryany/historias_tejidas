import '../css/componentes/toast.css';

function Toast({ mensaje, tipo, visible }) {
  if (!visible) return null;

  return (
    <div className={`toast-contenedor ${tipo}`}>
      <p>{mensaje}</p>
    </div>
  );
}

export default Toast;