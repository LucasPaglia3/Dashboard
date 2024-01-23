import { DataTable } from "@/components/ui/Data-Table";
import { useClientes } from "./useClientes";
import { columns } from "./Clientes-Columns";
import Spinner from "@/components/ui/Spinner";

const ListaClientes = () => {
  const { clientes, isLoading } = useClientes();

  if (isLoading) return <Spinner />;

  const clientesArray = clientes.clientes;

  return (
    <div className="flex flex-col ">
      <h1 className="text-3xl font-semibold">Lista de Clientes</h1>
      <DataTable data={clientesArray} columns={columns} paddingY={4} />
    </div>
  );
};

export default ListaClientes;
