function AlertaTailwind({ mensaje }) {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded shadow-md">
      <p className="font-bold">Atención</p>
      <p>{mensaje}</p>
    </div>
  );
}

export default AlertaTailwind;