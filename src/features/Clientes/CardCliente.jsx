import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { AtSign } from "lucide-react";
import { Phone } from "lucide-react";
import { Hash } from "lucide-react";

import EditCliente from "./FormEditCliente";

const CardCliente = ({ cliente }) => {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">Datos de cliente:</CardTitle>
        <EditCliente cliente={cliente} />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 px-3 pb-3 pt-5 place-items-center xl:place-items-baseline gap-8 xl:gap-0">
          <div className="grid grid-rows-2 gap-3 cols-span-4">
            <h1 className="text-4xl font-semibold">{cliente.nombre}</h1>
            <h3 className="text-center xl:text-start">{cliente.web}</h3>
          </div>

          <div className="flex items-center col-span-1 gap-4">
            <div className="grid grid-rows-2">
              <div className="flex items-center gap-0.5">
                <AtSign size={18} className=" stroke-gray-500" />
                <span className="text-lg font-semibold text-gray-500">
                  email
                </span>
              </div>
              <h1 className="text-xl font-semibold">{cliente.email}</h1>
            </div>
          </div>

          <div className="flex items-center col-span-1 gap-4">
            <div className="grid grid-rows-2">
              <div className="flex items-center gap-0.5">
                <Phone size={18} className=" stroke-gray-500" />
                <span className="text-lg font-semibold text-gray-500">
                  teléfono
                </span>
              </div>
              <h1 className="text-xl font-semibold">{cliente.telefono}</h1>
            </div>
          </div>

          <div className="flex items-center col-span-1 gap-4">
            <div className="grid grid-rows-2">
              <div className="flex items-center gap-0.5">
                <Hash size={18} className=" stroke-gray-500" />
                <span className="text-lg font-semibold text-gray-500">
                  cuit
                </span>
              </div>
              <h1 className="text-xl font-semibold">{cliente.cuit}</h1>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardCliente;
