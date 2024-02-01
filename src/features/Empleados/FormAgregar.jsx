import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
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
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-lg">Agregar Empleado:</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="flex flex-col gap-3 w-auto items-center ">
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
                    <FormLabel htmlFor="empleado">Nombre de Empleado</FormLabel>
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
                    <FormLabel htmlFor="hours-worked">
                      Horas trabajadas
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Horas"
                        disabled={fullList}
                        {...form.register("horas", {
                          required: {
                            value: true,
                            message: "Introducí las horas de trabajo.",
                          },
                        })}
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
      </CardContent>
    </Card>
  );
};

export default FormAgregar;
