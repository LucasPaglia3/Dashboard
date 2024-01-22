import { useCreateHistorial } from "./useCreateHistorial";
import { getMonthName, getQuincena, getYear } from "../../utils/helpers";
import { Button } from "@/components/ui/button";

const ListAgregados = ({ listaEmp, fullList }) => {
  const { createHistorial, isPending } = useCreateHistorial();

  // Guarda listado en bd.
  const finalizarListado = () => {
    const mes = getMonthName();
    const quincena = getQuincena();
    const año = getYear();

    createHistorial({ listaEmp, mes, quincena, año });
  };

  return (
    <div className="flex flex-col gap-3 w-1/2">
      <h1 className="text-md font-semibold">Contactos Agregados</h1>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Empleado</h1>
          {listaEmp.map((empleado) => (
            <span key={empleado.horas}>{empleado.empleado}</span>
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Horas</h1>
          {listaEmp.map((empleado) => (
            <span key={empleado.empleado}>{empleado.horas}</span>
          ))}
        </div>
      </div>
      <Button color="primary" onClick={finalizarListado} disabled={!fullList}>
        Guardar historial.
      </Button>
    </div>
  );
};

export default ListAgregados;
