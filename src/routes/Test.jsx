import Horas from "../features/Empleados/Horas";
import PageTitle from "../ui/PageTitle";
import { Divider } from "@nextui-org/react";

const Test = () => {
  return (
    <div className="flex flex-col gap-9">
      <PageTitle
        title={"Contacts"}
        desc={"Descripción super larga sobre esta página"}
      />
      <Divider />
      <Horas />
    </div>
  );
};

export default Test;
