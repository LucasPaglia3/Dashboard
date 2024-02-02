import { Card, CardContent } from "@/components/ui/card";
import CardStats from "./CardStats";
import { useTrabajos } from "../Trabajos/useTrabajos";
import Spinner from "@/components/ui/Spinner";

const Inicio = () => {
  const { trabajos, isLoading } = useTrabajos();

  if (isLoading) return <Spinner />;
  return (
    <Card classname="w-full h-full">
      <CardContent>
        <div className="grid grid-cols-4">
          <CardStats title={"Motores"} data={""} />
        </div>
      </CardContent>
    </Card>
  );
};

export default Inicio;
