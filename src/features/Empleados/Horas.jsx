import { useEmpleados } from "./useEmpleados";
import { useHistorial } from "./useHistorial";
import { useState } from "react";
import Spinner from "../../components/ui/Spinner";

import { toast } from "react-toastify";
import FormAgregar from "./FormAgregar";
import ListaAgregados from "./ListaAgregados";
import ListaDeHistorial from "./ListaDeHistorial";

const Horas = () => {
  const [listaEmp, setListaEmp] = useState([]);

  const { empleados, isLoading } = useEmpleados();
  const { historial, isLoading: isLoading2 } = useHistorial();

  if (isLoading || isLoading2) return <Spinner />;
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
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-x-4 gap-y-2">
      <div className=" lg:col-span-2">
        <FormAgregar onSubmit={onSubmit} fullList={fullList} emp={emp} />
      </div>

      <div className="lg:col-span-3">
        <ListaAgregados
          listaEmp={listaEmp}
          fullList={fullList}
          setListaEmp={setListaEmp}
        />
      </div>
      <div className="lg:col-span-5">
        <ListaDeHistorial historial={historial} />
      </div>
    </div>
  );
};

export default Horas;
