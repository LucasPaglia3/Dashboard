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
import { useEditTrabajo } from "./useEditTrabajo";
import Spinner from "@/components/ui/Spinner";

const FormEditTrabajo = ({ trabajo = {} }) => {
  const [open, setOpen] = useState(false);
  const { id: idToEdit } = trabajo;
  const form = useForm({
    defaultValues: trabajo,
  });
  const selectedOption = form.watch("marca"); // Se fija constantemente en el valor de marca para cambiar el form de forma dinámica.

  const { editTrabajo, isEditing } = useEditTrabajo();

  const onSubmit = (data) => {
    let image = null;
    if (data.image !== null) {
      image = typeof data.image === "string" ? data.image : data.image[0];
    }

    const nuevaFechaSalida =
      data.estado === "entregado" ? new Date().toISOString() : null;

    editTrabajo(
      {
        newTrabajo: { ...data, image, fechaSalida: nuevaFechaSalida },
        id: idToEdit,
      },
      { onSuccess: () => setOpen(!open) }
    );
    console.log({ ...data, image, nuevaFechaSalida, id: idToEdit });
  };

  const onCancel = () => {
    setOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="blue" className="flex items-center">
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
            className="flex flex-col items-center gap-3 md:grid md:grid-cols-2 md:gap-2"
          >
            <div className="col-start-1 flex flex-col gap-3">
              <FormField
                name="estado"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-6 items-center gap-12">
                      <FormLabel htmlFor="estado">Estado</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        {...form.register("estado")}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione la estado" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="espera">Espera</SelectItem>
                          <SelectItem value="bobinando">Bobinando</SelectItem>
                          <SelectItem value="terminado">Terminado</SelectItem>
                          <SelectItem value="entregado">Entregado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </FormItem>
                )}
              />
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
                (trabajo.tipo === "Freno" && selectedOption === "Otro")) && (
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
                            className="col-span-3 w-fit"
                            {...form.register("diametroExterior")}
                          />
                        </div>
                      </FormItem>
                    )}
                  />
                </>
              )}
              <FormField
                name="image"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-6 items-center gap-12 w-full">
                      <FormLabel
                        htmlFor="image"
                        className="col-span-1 text-right"
                      >
                        Imagen
                      </FormLabel>
                      <Input
                        type="file"
                        accept="image/*"
                        className="col-span-4 w-full file:bg-slate-200 file:rounded-md bg-slate-100/20"
                        {...form.register("image")}
                      />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="col-start-2 flex flex-col gap-3">
              <FormField
                name="diametroAlambre"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-6 items-center gap-12">
                      <FormLabel
                        htmlFor="diametroAlambre"
                        className="col-span-1 text-right"
                      >
                        Diámetro Cobre
                      </FormLabel>
                      <Input
                        value={field.value}
                        placeholder="Diámetro Cobre"
                        className="col-span-3 w-fit"
                        {...form.register("diametroAlambre")}
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
                        value={field.value}
                        placeholder="Número de espiras"
                        className="col-span-3 w-fit"
                        {...form.register("espiras")}
                      />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-1">
              <Button type="button" onClick={onCancel} disabled={isEditing}>
                Cancelar
              </Button>
              <Button type="submit" variant="confirm" disabled={isEditing}>
                {isEditing ? (
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

export default FormEditTrabajo;
