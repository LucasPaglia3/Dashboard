import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";

const FormAgregar = ({ onSubmit, fullList, emp }) => {
  const form = useForm();

  return (
    <div className="flex flex-col gap-3 w-1/2">
      <h1 className="text-md font-semibold">Agregar Contacto</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-auto border-2 rounded-xl h-26 items-center p-2 xl:p-8 justify-between gap-4"
        >
          <FormField
            name="empleado"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seleccione un empleado</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  disabled={fullList}
                  {...form.register("empleado", { required: true })}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione un empleado" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {emp.map((empleado) => (
                      <SelectItem
                        key={empleado.nombre}
                        value={empleado.nombre.toString()}
                      >
                        {empleado.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>Empleado a agregar</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            name="horas"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Horas</FormLabel>
                <FormControl>
                  <Input
                    placeholder="horas"
                    disabled={fullList}
                    {...form.register("horas", { required: true })}
                  />
                </FormControl>
                <FormDescription>
                  Introduzca la cantidad de horas de trabajo
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit" variant="confirm" disabled={fullList}>
            Agregar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormAgregar;
