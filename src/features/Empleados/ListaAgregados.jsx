import { useCreateHistorial } from "./useCreateHistorial";
import { getMonthName, getQuincena, getYear } from "../../utils/helpers";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Spinner from "@/components/ui/Spinner";

const ListAgregados = ({ listaEmp, fullList, setListaEmp }) => {
  const { createHistorial, isPending } = useCreateHistorial();

  const handleDeleteFromList = (id) => {
    setListaEmp((lista) => lista.filter((emp) => emp.empleado !== id));
  };

  const handleResetList = () => {
    setListaEmp([]);
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
    <Card className="relative shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-lg">Empleados Agregados:</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <div className="grid grid-cols-6 pb-2 overflow-y-auto h-[9.75rem]">
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
        <div className="pt-1 self-end flex gap-2 place-content-end">
          <Button
            className=""
            variant="destructive"
            onClick={handleResetList}
            disabled={listaEmp.length <= 1}
          >
            Eliminar Todo
          </Button>
          <Button
            className=""
            variant="blue"
            onClick={finalizarListado}
            disabled={!fullList}
          >
            {isPending ? (
              <Spinner isForButton={true} />
            ) : (
              <span>Guardar historial</span>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListAgregados;
