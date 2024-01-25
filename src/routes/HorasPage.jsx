import { Separator } from "@/components/ui/separator";
import Horas from "../features/Empleados/Horas";
import PageTitle from "../components/ui/PageTitle";

const HorasPage = () => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <PageTitle title={"Empleados/Horas"} />
      <Separator />
      <Horas />
    </div>
  );
};

export default HorasPage;
