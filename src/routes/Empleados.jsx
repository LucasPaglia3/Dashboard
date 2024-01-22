import { Separator } from "@radix-ui/react-select";
import Horas from "../features/Empleados/Horas";
import PageTitle from "../ui/PageTitle";

const Empleados = () => {
  return (
    <div className="flex flex-col gap-9">
      <PageTitle
        title={"Contacts"}
        desc={"Descripción super larga sobre esta página"}
      />
      <Separator />
      <Horas />
    </div>
  );
};

export default Empleados;
