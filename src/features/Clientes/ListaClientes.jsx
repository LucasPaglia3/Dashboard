import { DataTable } from "@/components/ui/Data-Table";
import { useClientes } from "./useClientes";
import { columns } from "./Clientes-Columns";
import Spinner from "@/components/ui/Spinner";
import CreateCliente from "./CreateCliente";

const ListaClientes = () => {
  const { clientes, isLoading } = useClientes();

  if (isLoading) return <Spinner />;
  const clientesArray = clientes.clientes;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Lista de Clientes</h1>
        <CreateCliente />
      </div>
      <div className="w-auto">
        <DataTable
          data={clientesArray}
          columns={columns}
          usesFacetedFilter="nombre"
          filterTitle="Nombre"
          paddingY={2}
          pageSize={10}
        />
      </div>
    </div>
  );
};

export default ListaClientes;
