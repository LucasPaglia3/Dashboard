import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCrearCliente } from "./useCrearCliente";
import Spinner from "@/components/ui/Spinner";

const FormCreateCliente = () => {
  const [open, setOpen] = useState(false);
  const form = useForm();

  const { createCliente, isLoading } = useCrearCliente();

  const onSubmit = (data) => {
    createCliente(data, {
      onSuccess: () => {
        setOpen(!open);
        form.reset();
        form.clearErrors();
      },
    });
  };

  const onCancel = () => {
    setOpen(!open);
    form.reset();
    form.clearErrors();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="blue" className="flex items-center">
          <Plus className="mr-1 h-5 w-5" />
          <span className="sm:block hidden">Agregar nuevo cliente</span>
          <span className="sm:hidden block">Nuevo cliente</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Agregar nuevo cliente</DialogTitle>
          <DialogDescription>
            Rellená los datos correspondientes.
          </DialogDescription>
        </DialogHeader>

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
                            v.toString().length >= 9 || "Minimo 9 dígitos",
                        },
                      })}
                    />
                    <FormMessage className="col-span-2 text-sm" />
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
                    <FormLabel htmlFor="cuit" className="col-span-1 text-right">
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
                {isLoading ? (
                  <Spinner isForButton={true} />
                ) : (
                  <span>Guardar</span>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FormCreateCliente;
