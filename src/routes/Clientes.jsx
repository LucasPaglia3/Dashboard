import { Separator } from "@/components/ui/separator";
import PageHeader from "../components/ui/PageHeader";
import ListaClientes from "@/features/Clientes/ListaClientes";

const Clientes = () => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <PageHeader title={"Clientes"} />
      <Separator />
      <ListaClientes />
    </div>
  );
};

export default Clientes;
