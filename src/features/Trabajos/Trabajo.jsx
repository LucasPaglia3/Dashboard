import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useClienteId } from "../Clientes/useCliente";
import FormEditTrabajo from "./FormEditTrabajo";

import Spinner from "@/components/ui/Spinner";
import CardDatosTrabajo from "./CardDatosTrabajo";
import CardImagenTrabajo from "./CardImagenTrabajo";
import CardTareasRealizadas from "./CardTareasRealizadas";

const Trabajo = ({ trabajo }) => {
  const { cliente, isLoading } = useClienteId(trabajo.idCliente);

  if (isLoading) return;
  <div className="flex justify-center items-center">
    <Spinner />
  </div>;
  return (
    <Card className="shadow-md min-h-vh w-full pb-12">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">
          Detalles de trabajo:
        </CardTitle>
        <FormEditTrabajo trabajo={trabajo} />
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-5 gap-3 h-full">
        <CardImagenTrabajo trabajo={trabajo} />
        <CardDatosTrabajo trabajo={trabajo} cliente={cliente} />
        <div className="col-span-5">
          <CardTareasRealizadas />
        </div>
      </CardContent>
    </Card>
  );
};

export default Trabajo;
