import CardCliente from "@/features/Clientes/CardCliente";
import CardTrabajos from "./Trabajos/CardTrabajos";

const Cliente = ({ cliente }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-rows-3 h-full">
      <div className="row-span-1">
        <CardCliente cliente={cliente} />
      </div>
      <div className="row-span-3">
        <CardTrabajos />
      </div>
    </div>
  );
};

export default Cliente;
