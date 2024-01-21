import { useEmpleados } from "./useEmpleados";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

import { toast } from "react-toastify";
import FormAgregar from "./FormAgregar";
import ListaParaHistorial from "./ListaParaHistorial";

const Horas = () => {
  const [listaEmp, setListaEmp] = useState([]);

  const { empleados, isLoading } = useEmpleados();

  if (isLoading) return <Spinner size="lg" />;
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
    <div className="w-full flex gap-8">
      <FormAgregar onSubmit={onSubmit} fullList={fullList} emp={emp} />
      <Divider orientation="vertical" className=" h-auto" />
      <ListaParaHistorial listaEmp={listaEmp} fullList={fullList} />
    </div>
  );
};

export default Horas;
