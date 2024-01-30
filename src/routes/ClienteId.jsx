import PageTitle from "@/components/ui/PageHeader";
import Spinner from "@/components/ui/Spinner";
import { Separator } from "@/components/ui/separator";
import Cliente from "@/features/Clientes/Cliente";
import { useClienteId } from "@/features/Clientes/useCliente";

const ClienteId = () => {
  const { cliente, isLoading } = useClienteId();

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <Spinner />
      </div>
    );

  console.log(cliente);

  return (
    <div className="flex flex-col gap-5 h-full">
      <PageTitle title="Cliente" />
      <Separator />
      <Cliente cliente={cliente} />
    </div>
  );
};

export default ClienteId;
