import { useEmpleados } from "./useEmpleados";
import { useState } from "react";
import Spinner from "../../ui/Spinner";

import { toast } from "react-toastify";
import FormAgregar from "./FormAgregar";
import ListaAgregados from "./ListaAgregados";
import ListaDeHistorial from "./ListaDeHistorial";

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
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <div className="h-auto xl:h-56 pb-10">
        <FormAgregar onSubmit={onSubmit} fullList={fullList} emp={emp} />
      </div>
      <div className=" pb-10">
        <ListaAgregados
          listaEmp={listaEmp}
          fullList={fullList}
          setListaEmp={setListaEmp}
        />
      </div>
      <div className="xl:col-span-2">
        <ListaDeHistorial />
      </div>
    </div>
  );
};

export default Horas;
