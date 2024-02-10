import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CardStats from "./CardStats";
import { useTrabajos } from "../Trabajos/useTrabajos";
import Spinner from "@/components/ui/Spinner";

import { Battery } from "lucide-react";
import { Bolt } from "lucide-react";
import { Building2 } from "lucide-react";
import { useClientes } from "../Clientes/useClientes";
import ListaTrabajos from "./ListaTrabajos";

import FormCreateCliente from "../Clientes/FormCreateCliente";
import FormCreateTrabajo from "../Trabajos/FormCreateTrabajo";

const Inicio = () => {
  const { trabajos, isLoading } = useTrabajos();
  const { clientes, isLoading: isLoading2 } = useClientes();

  if (isLoading || isLoading2) return <Spinner />;

  const trabajosSinHacer = trabajos.filter(
    (trabajo) => trabajo.estado !== "entregado"
  );

  const motoresEntregados = trabajos.filter(
    (trabajo) => trabajo.tipo === "Motor" && trabajo.estado === "entregado"
  ).length;

  const frenosEntregados = trabajos.filter(
    (trabajo) => trabajo.tipo === "Freno" && trabajo.estado === "entregado"
  ).length;

  return (
    <Card className="w-full lg:h-full md:h-max shadow-md">
      <CardContent className="pt-4 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div>
            <Card className="shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-md font-semibold">
                  Acceso rápido:
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-2">
                <FormCreateCliente />
                <FormCreateTrabajo />
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center col-span-2 border py-3 rounded-md shadow-md gap-3">
            <CardStats
              title={"Motores Entregados"}
              data={motoresEntregados}
              icon={<Battery size={48} className=" stroke-blue-500" />}
            />
            <CardStats
              title={"Frenos Entregados"}
              data={frenosEntregados}
              icon={<Bolt size={48} className=" stroke-yellow-500" />}
            />
            <CardStats
              title={"Clientes"}
              data={clientes.length}
              icon={<Building2 size={48} className=" stroke-green-700" />}
            />
          </div>
        </div>

        <div className="w-full">
          <ListaTrabajos trabajos={trabajosSinHacer} />
        </div>
      </CardContent>
    </Card>
  );
};

export default Inicio;
