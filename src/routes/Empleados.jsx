import { Separator } from "@/components/ui/separator";
import PageHeader from "../components/ui/PageHeader";
import ListaEmpleados from "@/features/Empleados/ListaEmpleados";

const Empleados = () => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <PageHeader title={"Empleados"} />
      <Separator />
      <ListaEmpleados />
    </div>
  );
};

export default Empleados;
