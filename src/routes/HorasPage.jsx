import { Separator } from "@/components/ui/separator";
import Horas from "../features/Empleados/Horas";
import PageHeader from "../components/ui/PageHeader";

const HorasPage = () => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <PageHeader title={"Horas"} />
      <Separator />
      <Horas />
    </div>
  );
};

export default HorasPage;
