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

import { Plus } from "lucide-react";
import { ChevronsUpDown } from "lucide-react";
import { Check } from "lucide-react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useClientes } from "../Clientes/useClientes";
import { cn } from "@/lib/utils";
import Spinner from "@/components/ui/Spinner";
import { useCreateTrabajo } from "./useCreateTrabajo";

const CreateTrabajo = () => {
  const [open, setOpen] = useState();
  const form = useForm();

  const { clientes, isLoading } = useClientes();
  const { createTrabajo, isLoading: isCreating } = useCreateTrabajo();
  if (isLoading) return <Spinner />;

  // Creamos un array de objetos para pasarle al componente Command
  const clientesArray = clientes.clientes.map((cli) => {
    return {
      label: cli.nombre,
      value: cli.id,
    };
  });

  const onSubmit = (data) => {
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
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                                  (cli) => cli.value === field.value
                                )?.label
                              : "Selecciona un cliente"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput placeholder="Busca un cliente..." />
                          <CommandEmpty>No existe ese cliente.</CommandEmpty>
                          <CommandGroup>
                            {clientesArray.map((cli) => (
                              <CommandItem
                                value={cli.label}
                                key={cli.value}
                                onSelect={() => {
                                  form.setValue("idCliente", cli.value);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    cli.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {cli.label}
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
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTrabajo;
