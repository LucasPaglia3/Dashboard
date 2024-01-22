import { useEmpleados } from "./useEmpleados";
import { useState } from "react";
import Spinner from "../../ui/Spinner";

import { toast } from "react-toastify";
import FormAgregar from "./FormAgregar";
import ListaAgregados from "./ListaAgregados";
import ListaDeHistorial from "./ListaDeHistorial";
import { Separator } from "@/components/ui/separator";

const Horas = () => {
  const [listaEmp, setListaEmp] = useState([]);

  const { empleados, isLoading } = useEmpleados();

  if (isLoading) return <Spinner />;
  const emp = empleados.empleados;

  const fullList = emp.length === listaEmp.length;

  const onSubmit = (data) => {
    const newEmployee = { ...data };

    const employeeExists = listaEmp.some(
      (empleado) => empleado.empleado === newEmployee.empleado // Busca que el nombre de los empleados no sean iguales.
    );

    if (!employeeExists) {
      // Si no lo son. Agregar al array.
      setListaEmp([...listaEmp, newEmployee]);
    } else {
      toast.error(newEmployee.empleado + " Ya fue agregado.");
    }
  };

  return (
    <>
      <div className="w-full h-64 flex gap-8">
        <FormAgregar onSubmit={onSubmit} fullList={fullList} emp={emp} />
        <Separator orientation="vertical" className=" h-full" />
        <ListaAgregados listaEmp={listaEmp} fullList={fullList} />
      </div>
      <div className="flex flex-col items-center">
        <ListaDeHistorial />
      </div>
    </>
  );
};

export default Horas;
