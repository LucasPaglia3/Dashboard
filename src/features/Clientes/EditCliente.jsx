import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { useEditCliente } from "./useEditCliente";
import Spinner from "@/components/ui/Spinner";
import { useState } from "react";

const EditCliente = ({ cliente = {} }) => {
  const [open, setOpen] = useState(false);
  const { editCliente, isLoading } = useEditCliente();

  const form = useForm({
    defaultValues: cliente,
  });

  const onSubmit = (data) => {
    editCliente(data, {
      onSuccess: () => {
        setOpen(!open);
        form.reset();
        form.clearErrors();
      },
      onError: (error) => {
        console.log(error.message);
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
        <Button variant="blue" className="flex items-center gap-2">
          <Pencil size={16} />
          <span>Editar</span>
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
                  {isLoading ? (
                    <Spinner isForButton={true} />
                  ) : (
                    <span>Guardar</span>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditCliente;
