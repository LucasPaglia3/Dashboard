import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useClienteId } from "../Clientes/useCliente";
import FormEditTrabajo from "./FormEditTrabajo";

import { BadgeInfo } from "lucide-react";
import { Cylinder } from "lucide-react";
import { DraftingCompass } from "lucide-react";
import { Diameter } from "lucide-react";
import { Hash } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import Spinner from "@/components/ui/Spinner";

const Trabajo = ({ trabajo }) => {
  const { cliente, isLoading } = useClienteId(trabajo.idCliente);

  if (isLoading) return;
  <div className="flex justify-center items-center">
    <Spinner />
  </div>;
  return (
    <Card className="shadow-md h-vh w-full pb-12">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">
          Detalles de trabajo:
        </CardTitle>
        <FormEditTrabajo trabajo={trabajo} />
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-5 gap-3 h-full">
        <Card className="shadow-md col-span-1 lg:col-span-2 h-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-md font-medium">Imagen</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">IMG</CardContent>
        </Card>
        <Card className="shadow-md col-span-1 lg:col-span-3 h-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-md font-medium">
              Información sobre el trabajo
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-4 col-span-2">
              <h2 className="text-3xl font-semibold">
                {trabajo.tipo} para {cliente.nombre}
              </h2>
              <Separator />
            </div>
            <div className="col-start-1 col-end-1">
              <div className="grid grid-rows-4 md:grid-rows-6 pt-3 gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    {<BadgeInfo size={21} />}
                    <h3 className="text-xl font-semibold">Marca</h3>
                  </div>
                  <span className="pl-8 pb-3">
                    {trabajo.marca === null
                      ? "Especificar marca"
                      : trabajo.marca}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    {<Cylinder size={21} />}
                    <h3 className="text-xl font-semibold">Cuerpo</h3>
                  </div>
                  <span className="pl-8">
                    {trabajo.cuerpo === null
                      ? "Especificar cuerpo"
                      : trabajo.cuerpo}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    {<DraftingCompass size={21} />}
                    <h3 className="text-xl font-semibold">Diámetro Interior</h3>
                  </div>
                  <span className="pl-8">
                    {trabajo.diametroInterior === null
                      ? "Especificar diámetro interior"
                      : trabajo.diametroInterior}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    {<DraftingCompass size={21} />}
                    <h3 className="text-xl font-semibold">Diámetro Exterior</h3>
                  </div>
                  <span className="pl-8">
                    {trabajo.diametroExterior === null
                      ? "Especificar diámetro exterior"
                      : trabajo.diametroExterior}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-start-1 col-end-1 md:col-start-2 md:col-end-2">
              <div className="grid grid-rows-4 md:grid-rows-6 pt-3 gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    {<Diameter strokeWidth={2} size={21} />}
                    <h3 className="text-xl font-semibold">Diámetro Cobre</h3>
                  </div>
                  <span className="pl-8 pb-3">
                    {trabajo.diametroAlambre === null
                      ? "Especificar medida de cobre"
                      : trabajo.diametroAlambre}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    {<Hash strokeWidth={2} size={21} />}
                    <h3 className="text-xl font-semibold">Número de Espiras</h3>
                  </div>
                  <span className="pl-8 pb-3">
                    {trabajo.espiras === null
                      ? "Especificar número de espiras"
                      : trabajo.espiras}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default Trabajo;
