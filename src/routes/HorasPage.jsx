import { Separator } from "@/components/ui/separator";
import Horas from "../features/Empleados/Horas";
import PageTitle from "../components/ui/PageHeader";

const HorasPage = () => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <PageTitle title={"Horas"} />
      <Separator />
      <Horas />
    </div>
  );
};

export default HorasPage;
