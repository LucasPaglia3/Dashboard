import { Separator } from "@/components/ui/separator";
import PageTitle from "../components/ui/PageTitle";
import ListaClientes from "@/features/Clientes/ListaClientes";

const Clientes = () => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <PageTitle title={"Clientes"} />
      <Separator />
      <ListaClientes />
    </div>
  );
};

export default Clientes;
