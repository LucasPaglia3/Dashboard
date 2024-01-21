import { useEmpleados } from "./useEmpleados";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";
import { Select, SelectItem, Input, Button, Divider } from "@nextui-org/react";

import { useForm, Controller } from "react-hook-form";

const Horas = () => {
  const [listaEmp, setListaEmp] = useState([{}]);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const { empleados, isLoading } = useEmpleados();

  if (isLoading) return <Spinner size="lg" />;

  const emp = empleados.empleados;

  const onSubmit = (data) => {
    const newEmployee = { ...data };

    const employeeExists = listaEmp.some(
      (empleado) => empleado.employee === newEmployee.employee // Busca que el nombre de los empleados no sean iguales.
    );

    if (!employeeExists) {
      // Si no lo son. Agregar al array.
      setListaEmp([...listaEmp, newEmployee]);
      reset();
      console.log(listaEmp);
    } else {
      console.log("ya existe");
    }
  };

  return (
    <div className="w-full flex gap-8">
      <div className="flex flex-col gap-3 w-1/2">
        <h1 className="text-md font-semibold">Agregar Contacto</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-auto border-2 rounded-xl h-20 items-center p-2 xl:p-11 justify-between bg-slate-50 gap-4"
        >
          <Controller
            name="employee"
            control={control}
            render={({ field }) => (
              <Select
                variant="flat"
                label="Seleccione un empleado"
                color="default"
                onChange={field.onChange}
              >
                {emp.map((empleado) => (
                  <SelectItem key={empleado.nombre} value={empleado.value}>
                    {empleado.nombre}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
          <Input
            label="Horas de trabajo"
            variant="flat"
            color="default"
            {...register("hours")}
          />
          <div>
            <Button color="primary" type="submit">
              Agregar
            </Button>
          </div>
        </form>
      </div>
      <Divider orientation="vertical" className=" h-auto" />
      <div className="flex flex-col gap-3 w-1/2">
        <h1 className="text-md font-semibold">Contactos Agregados</h1>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">Empleado</h1>
            {listaEmp.map((empleado) => (
              <span key={empleado.id}>{empleado.employee}</span>
            ))}
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">Horas</h1>
            {listaEmp.map((empleado) => (
              <span key={empleado.id}>{empleado.hours}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horas;
