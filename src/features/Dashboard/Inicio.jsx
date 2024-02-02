import { Card, CardContent } from "@/components/ui/card";
import CardStats from "./CardStats";
import { useTrabajos } from "../Trabajos/useTrabajos";
import Spinner from "@/components/ui/Spinner";

import { Battery } from "lucide-react";
import { Bolt } from "lucide-react";

const Inicio = () => {
  const { trabajos, isLoading } = useTrabajos();

  if (isLoading) return <Spinner />;

  const motoresEntregados = trabajos.filter(
    (trabajo) => trabajo.tipo === "Motor"
  ).length;

  const frenosEntregados = trabajos.filter(
    (trabajo) => trabajo.tipo === "Freno"
  ).length;

  return (
    <Card className="w-full h-full">
      <CardContent className="pt-4">
        <div className="grid grid-cols-4 place-items-center">
          <CardStats
            title={"Motores Entregados"}
            data={motoresEntregados}
            color={"blue"}
            icon={<Battery size={48} className=" stroke-blue-600/90" />}
          />
          <CardStats
            title={"Frenos Entregados"}
            data={frenosEntregados}
            color={"blue"}
            icon={<Bolt size={48} className=" stroke-blue-600/90" />}
          />
          <CardStats
            title={"Motores Realizados"}
            data={""}
            icon={<Battery size={48} className=" stroke-blue-600" />}
          />
          <CardStats
            title={"Motores Realizados"}
            data={""}
            icon={<Battery size={48} className=" stroke-blue-600" />}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Inicio;
