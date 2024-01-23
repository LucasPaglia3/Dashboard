import { Separator } from "@/components/ui/separator";
import Horas from "../features/Empleados/Horas";
import PageTitle from "../ui/PageTitle";

const Empleados = () => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <PageTitle title={"Contacts"} />
      <Separator />
      <Horas />
    </div>
  );
};

export default Empleados;
