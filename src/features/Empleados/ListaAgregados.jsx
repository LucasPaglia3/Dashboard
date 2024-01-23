import { useCreateHistorial } from "./useCreateHistorial";
import { getMonthName, getQuincena, getYear } from "../../utils/helpers";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ListAgregados = ({ listaEmp, fullList, setListaEmp }) => {
  const { createHistorial, isPending } = useCreateHistorial();

  const handleDeleteFromList = (id) => {
    setListaEmp((lista) => lista.filter((emp) => emp.empleado !== id));
  };

  // Guarda listado en bd.
  const finalizarListado = () => {
    const mes = getMonthName();
    const quincena = getQuincena();
    const año = getYear();

    createHistorial({ listaEmp, mes, quincena, año }); // Guradar en db.
    setListaEmp([]); // Vaciar state
  };

  return (
    <div className="flex flex-col gap-3 w-auto ">
      <h1 className="text-md font-semibold text-center lg:text-start">
        Contactos Agregados
      </h1>
      <div className="grid grid-cols-6">
        <div className="flex flex-col col-span-4">
          <h1 className="text-lg font-semibold">Empleado</h1>
          {listaEmp.map((empleado) => (
            <span key={empleado.horas}>{empleado.empleado}</span>
          ))}
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-lg font-semibold">Horas</h1>
          {listaEmp.map((empleado) => (
            <span key={empleado.empleado}>{empleado.horas}</span>
          ))}
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-lg font-semibold">Eliminar</h1>
          {listaEmp.map((empleado) => (
            <X
              key={empleado.empleado}
              onClick={() => handleDeleteFromList(empleado.empleado)}
              className=" text-red-700 self-center cursor-pointer"
            />
          ))}
        </div>
      </div>
      <Button variant="blue" onClick={finalizarListado} disabled={!fullList}>
        Guardar historial
      </Button>
    </div>
  );
};

export default ListAgregados;
