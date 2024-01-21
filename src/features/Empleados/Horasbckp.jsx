import { useEmpleados } from "./useEmpleados";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";
import { Select, SelectItem, Input, Button, Divider } from "@nextui-org/react";

import { useForm, Controller } from "react-hook-form";

import { toast } from "react-toastify";

const Horas = () => {
  const [listaEmp, setListaEmp] = useState([]);
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
  const fullList = emp.length === listaEmp.length;

  // Guarda listado en bd.
  const finalizarListado = () => {
    console.log(JSON.stringify(listaEmp));
  };

  const onSubmit = (data) => {
    const newEmployee = { ...data };

    const employeeExists = listaEmp.some(
      (empleado) => empleado.empleado === newEmployee.empleado // Busca que el nombre de los empleados no sean iguales.
    );

    if (!employeeExists) {
      // Si no lo son. Agregar al array.
      setListaEmp([...listaEmp, newEmployee]);
      reset();
    } else {
      toast.error(newEmployee.empleado + " Ya fue agregado.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
            name="empleado"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                variant="bordered"
                label="Seleccione un empleado"
                color="default"
                onChange={field.onChange}
                isDisabled={fullList}
                isInvalid={errors.empleado ? true : false}
                errorMessage={
                  errors.empleado && "Tiene que seleccionar un empleado."
                }
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
            name="horas"
            label="Horas de trabajo"
            variant="bordered"
            color="default"
            isDisabled={fullList}
            errorMessage={
              errors.horas && "Tiene que introducir la cantidad de horas."
            }
            isInvalid={errors.horas ? true : false}
            {...register("horas", { required: true })}
          />
          <div>
            <Button color="primary" type="submit" isDisabled={fullList}>
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
              <span key={empleado.id}>{empleado.empleado}</span>
            ))}
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">Horas</h1>
            {listaEmp.map((empleado) => (
              <span key={empleado.id}>{empleado.horas}</span>
            ))}
          </div>
        </div>
        <Button
          color="primary"
          onClick={finalizarListado}
          isDisabled={!fullList}
        >
          Finalizar listado
        </Button>
      </div>
    </div>
  );
};

export default Horas;
