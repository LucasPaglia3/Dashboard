import { DataTable } from "@/components/ui/Data-Table";
import { columns } from "./Empleados-Column";
import Spinner from "@/components/ui/Spinner";
import { useEmpleados } from "./useEmpleados";

const ListaEmpleados = () => {
  const { empleados, isLoading } = useEmpleados();

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Lista de Empleados</h1>
      </div>
      <div className="w-auto">
        <DataTable data={empleados} columns={columns} pageSize={10} />
      </div>
    </div>
  );
};

export default ListaEmpleados;
