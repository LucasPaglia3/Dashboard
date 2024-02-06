import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Spinner from "@/components/ui/Spinner";

import { Plus } from "lucide-react";
import { ChevronsUpDown } from "lucide-react";
import { Check } from "lucide-react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useClientes } from "../Clientes/useClientes";
import { cn } from "@/lib/utils";

import { toast } from "react-toastify";

import { useCreateTrabajo } from "./useCreateTrabajo";

const FormCreateTrabajo = () => {
  const [open, setOpen] = useState();
  const form = useForm();

  const { clientes, isLoading } = useClientes();
  const { createTrabajo, isLoading: isCreating } = useCreateTrabajo();
  if (isLoading) return <Spinner />;

  // Creamos un array de objetos para pasarle al componente Command
  const clientesArray = clientes.map((cliente) => {
    return {
      label: cliente.nombre,
      value: cliente.id,
    };
  });

  const onSubmit = (data) => {
    if (!data.idCliente) {
      toast.error("Seleccione un cliente!");
    }
    createTrabajo(data, {
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
      <DialogTrigger asChild>
        <Button variant="blue" className="flex items-center">
          <Plus className="mr-1 h-5 w-5" />
          <span>Agregar nuevo trabajo</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Agregar nuevo trabajo</DialogTitle>
          <DialogDescription>
            Rellená los datos correspondientes.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3 items-baseline"
          >
            <FormField
              name="idCliente"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <div className="grid grid-cols-7 items-center gap-4">
                    <FormLabel
                      htmlFor="idCliente"
                      className="col-span-2 text-left"
                    >
                      Trabajo para:
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-[200px] justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? clientesArray.find(
                                  (cliente) => cliente.value === field.value
                                )?.label
                              : "Selecciona un cliente"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command {...form.register("idCliente")}>
                          <CommandInput placeholder="Busca un cliente..." />
                          <CommandEmpty>No existe ese cliente.</CommandEmpty>
                          <CommandGroup>
                            {clientesArray.map((cliente) => (
                              <CommandItem
                                value={cliente.label}
                                key={cliente.value}
                                onSelect={() => {
                                  form.setValue("idCliente", cliente.value);
                                  console.log(form.getValues("idCliente"));
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    cliente.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {cliente.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name="tipo"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-cols-7 items-center gap-4">
                    <FormLabel className="col-span-2 text-left">
                      Freno o Motor
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      {...form.register("tipo", {
                        required: { value: true, message: "Elegí una opción!" },
                      })}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione el tipo de trabajo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Motor">Motor</SelectItem>
                        <SelectItem value="Freno">Freno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </FormItem>
              )}
            />
            <div className="flex gap-1">
              <Button type="button" onClick={onCancel} disabled={isCreating}>
                Cancelar
              </Button>
              <Button type="submit" variant="confirm" disabled={isCreating}>
                {isCreating ? (
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

export default FormCreateTrabajo;
