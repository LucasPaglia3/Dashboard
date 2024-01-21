import { Select, SelectItem, Input, Button, Divider } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";

const FormAgregar = ({ onSubmit, fullList, emp }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
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
  );
};

export default FormAgregar;
