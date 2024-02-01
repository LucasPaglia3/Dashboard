import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";

import { Pencil } from "lucide-react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  marcasFrenos,
  marcasMotores,
  cuerpos,
} from "@/lib/datosFrenosYMotores";
import { Input } from "@/components/ui/input";

const FormEditTrabajo = ({ trabajo = {} }) => {
  const [open, setOpen] = useState(false);
  const form = useForm({
    defaultValues: trabajo,
  });

  console.log(trabajo);

  const onSubmit = () => {
    console.log("submit");
  };

  const onCancel = () => {
    setOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="blue" classname="flex items-center">
          <Pencil className="mr-1 h-5 w-5" />
          <span>Editar {trabajo.tipo}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md lg:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Editar {trabajo.tipo}</DialogTitle>
          <DialogDescription>
            Rellená los datos correspondientes.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-3 md:grid md:grid-cols-2 md:gap-0"
          >
            <div className="col-start-1 flex flex-col gap-3">
              <FormField
                name="marca"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-6 items-center gap-12">
                      <FormLabel htmlFor="marca">Marca</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        {...form.register("marca")}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione la marca" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {trabajo.tipo === "Motor"
                            ? marcasMotores.map((marca) => (
                                <SelectItem
                                  key={marca.id}
                                  value={marca.value.toString()}
                                >
                                  {marca.value}
                                </SelectItem>
                              ))
                            : marcasFrenos.map((marca) => (
                                <SelectItem
                                  key={marca.id}
                                  value={marca.value.toString()}
                                >
                                  {marca.value}
                                </SelectItem>
                              ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                name="cuerpo"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-6 items-center gap-12">
                      <FormLabel htmlFor="cuerpo">Cuerpo</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        {...form.register("cuerpo")}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione el cuerpo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {cuerpos.map((cuerpo) => (
                            <SelectItem
                              key={cuerpo.id}
                              value={cuerpo.value.toString()}
                            >
                              {cuerpo.value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </FormItem>
                )}
              />

              {(trabajo.tipo === "Motor" ||
                (trabajo.tipo === "Freno" && trabajo.marca === "Otro")) && (
                <>
                  <FormField
                    name="diametroInterior"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-6 items-center gap-12">
                          <FormLabel
                            htmlFor="diametroInterior"
                            className="col-span-1 text-right"
                          >
                            Diámetro Interno
                          </FormLabel>
                          <Input
                            value={field.value}
                            placeholder="Diámetro Interno"
                            className="col-span-3  w-fit"
                            {...form.register("diametroInterior")}
                          />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="diametroExterior"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-6 items-center gap-12">
                          <FormLabel
                            htmlFor="diametroExterior"
                            className="col-span-1 text-right"
                          >
                            Diámetro Externo
                          </FormLabel>
                          <Input
                            value={field.value}
                            placeholder="Diámetro Externo"
                            className="col-span-3  w-fit"
                            {...form.register("diametroExterior")}
                          />
                        </div>
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>
            <div className="col-start-2 flex flex-col gap-3">
              <FormField
                name="diametroCobre"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-6 items-center gap-12">
                      <FormLabel
                        htmlFor="diametroCobre"
                        className="col-span-1 text-right"
                      >
                        Diámetro Cobre
                      </FormLabel>
                      <Input
                        placeholder="Diámetro Cobre"
                        className="col-span-3 w-fit"
                        {...form.register("diametroCobre")}
                      />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                name="espiras"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-6 items-center gap-12">
                      <FormLabel
                        htmlFor="espiras"
                        className="col-span-1 text-right"
                      >
                        Número Espiras
                      </FormLabel>
                      <Input
                        placeholder="Número de espiras"
                        className="col-span-3 w-fit"
                        {...form.register("espiras")}
                      />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FormEditTrabajo;
