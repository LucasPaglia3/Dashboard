import { Button } from "@nextui-org/react";
import { useCreateHistorial } from "./useCreateHistorial";
import { getMonthName, getQuincena, getYear } from "../../utils/helpers";

const ListaParaHistorial = ({ listaEmp, fullList }) => {
  const { createHistorial, isPending } = useCreateHistorial();

  // Guarda listado en bd.
  const finalizarListado = () => {
    const mes = getMonthName();
    const quincena = getQuincena();
    const año = getYear();
    createHistorial({ listaEmp, mes, quincena, año });
    console.log({ listaEmp, mes });
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
      <Button
        color="primary"
        onClick={finalizarListado}
        isDisabled={!fullList}
        isLoading={isPending}
        spinner={
          <svg
            className="animate-spin h-5 w-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            />
          </svg>
        }
      >
        Guardar historial de horas para: {getQuincena().toUpperCase()} quincena
        del mes {getMonthName().toUpperCase()} del año {getYear()}.
      </Button>
    </div>
  );
};

export default ListaParaHistorial;
