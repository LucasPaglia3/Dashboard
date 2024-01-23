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
    <div className="flex flex-col gap-3 w-auto xl:w-[37rem] items-center xl:items-baseline">
      <h1 className="text-md font-semibold">Agregar Contacto</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row items-center justify-center gap-2 rounded-xl border-2 p-5 xl:w-full"
        >
          <FormField
            name="empleado"
            control={form.control}
            render={({ field }) => (
              <FormItem>
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
          <Button type="submit" variant="confirm" disabled={fullList}>
            Agregar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormAgregar;
