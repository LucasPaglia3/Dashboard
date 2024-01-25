import { DataTable } from "@/components/ui/Data-Table";
import { useClientes } from "./useClientes";
import { columns } from "./Clientes-Columns";
import Spinner from "@/components/ui/Spinner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useState } from "react";

const ListaClientes = () => {
  const [open, setOpen] = useState(false);
  const { clientes, isLoading } = useClientes();
  const form = useForm();

  const validatePhoneNumber = (value) => {
    const isValid = /^\d{10}$/g.test(value); // Check if the value is exactly 10 digits
    return isValid || "Please enter a valid 10-digit phone number";
  };

  if (isLoading) return <Spinner />;
  const clientesArray = clientes.clientes;

  const onSubmit = (data) => {
    console.log(data);
    setOpen(!open);
    form.reset();
    form.clearErrors();
  };

  const onCancel = () => {
    console.log(form.formState.errors);
    setOpen(!open);
    form.reset();
    form.clearErrors();
  };

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Lista de Clientes</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button variant="blue" className="flex items-center">
              <Plus className="mr-1 h-5 w-5" />
              <span>Agregar nuevo cliente</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Agregar nuevo cliente</DialogTitle>
              <DialogDescription>
                Rellená los datos correspondientes.
              </DialogDescription>
            </DialogHeader>
            <div className="">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-3"
                >
                  <FormField
                    className="grow"
                    name="nombre"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex items-center">
                        <div className="grid grid-cols-6 items-center gap-4">
                          <FormLabel
                            htmlFor="nombre"
                            className="col-span-1 text-right"
                          >
                            Nombre
                          </FormLabel>
                          <Input
                            placeholder="Nombre"
                            className="col-span-3 w-auto"
                            {...form.register("nombre", {
                              required: {
                                value: true,
                                message: "Ingrese un nombre!",
                              },
                            })}
                            {...field}
                          />
                          <FormMessage className="col-span-2" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex items-center">
                        <div className="grid grid-cols-6 items-center gap-4">
                          <FormLabel
                            htmlFor="email"
                            className="col-span-1 text-right"
                          >
                            Email
                          </FormLabel>
                          <Input
                            placeholder="Email"
                            className="col-span-3 w-full"
                            {...form.register("email", {
                              required: {
                                value: true,
                                message: "Ingrese un email!",
                              },
                            })}
                          />
                          <FormMessage className="col-span-2" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="telefono"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex items-center">
                        <div className="grid grid-cols-6 items-center gap-4">
                          <FormLabel
                            htmlFor="telefono"
                            className="col-span-1 text-right"
                          >
                            Teléfono
                          </FormLabel>
                          <Input
                            type="number"
                            placeholder="Teléfono"
                            className="col-span-3 w-full"
                            {...form.register("telefono", {
                              required: {
                                value: true,
                                message: "Ingrese un teléfono!",
                              },
                              valueAsNumber: true,
                              validate: {
                                greaterThan10: (v) =>
                                  v.toString().length >= 9 ||
                                  "Minimo 9 dígitos",
                              },
                            })}
                          />
                          <FormMessage className="col-span-2" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="cuit"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex items-center">
                        <div className="grid grid-cols-6 items-center gap-4">
                          <FormLabel
                            htmlFor="cuit"
                            className="col-span-1 text-right"
                          >
                            Cuit/Cuil
                          </FormLabel>
                          <Input
                            placeholder="Cuit/Cuil"
                            className="col-span-3 w-full"
                            {...form.register("cuit", {
                              required: {
                                value: true,
                                message: "Ingrese un cuit o cuil!",
                              },
                            })}
                          />
                          <FormMessage className="col-span-2" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row w-full gap-1 justify-start">
                    <Button type="button" onClick={onCancel}>
                      Cancelar
                    </Button>

                    <Button type="submit" variant="confirm" className="">
                      Guardar
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable
        data={clientesArray}
        columns={columns}
        paddingY={2}
        pageSize={10}
      />
    </div>
  );
};

export default ListaClientes;
