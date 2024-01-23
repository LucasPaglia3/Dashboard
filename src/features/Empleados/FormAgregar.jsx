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
import { Label } from "@/components/ui/label";
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
    <div className="flex flex-col gap-3 w-auto items-center ">
      <h1 className="text-3xl font-bold">Agregar Contacto</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-2 xl:w-full"
        >
          <FormField
            name="empleado"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="empleado">Nombre de Empleado</Label>
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
              </FormItem>
            )}
          />
          <FormField
            name="horas"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="hours-worked">Hours Worked</Label>
                <FormControl>
                  <Input
                    placeholder="Horas"
                    disabled={fullList}
                    {...form.register("horas", { required: true })}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="confirm"
            disabled={fullList}
            className="w-56"
          >
            Agregar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormAgregar;
