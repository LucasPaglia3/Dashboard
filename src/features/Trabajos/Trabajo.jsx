import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useClienteId } from "../Clientes/useCliente";
import FormEditTrabajo from "./FormEditTrabajo";

import Spinner from "@/components/ui/Spinner";
import CardDatosTrabajo from "./CardDatosTrabajo";

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
          <CardContent className="flex flex-col items-center">
            {trabajo.image !== null ? (
              <img
                className="mt-5"
                src={trabajo.image}
                alt={`Imagen ${trabajo.tipo}`}
              />
            ) : (
              <h4 className="mt-8 font-semibold text-xl">
                Subí una imagen en la sección &quot;Editar Freno&quot;.
              </h4>
            )}
          </CardContent>
        </Card>
        <CardDatosTrabajo trabajo={trabajo} cliente={cliente} />
      </CardContent>
    </Card>
  );
};

export default Trabajo;
