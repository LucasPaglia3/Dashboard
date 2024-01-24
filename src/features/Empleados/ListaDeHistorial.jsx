import Spinner from "@/components/ui/Spinner";
import { useHistorial } from "./useHistorial";
import { DataTable } from "../../components/ui/Data-Table";
import { columns } from "./Empleados-Columns";

const ListaDeHistorial = () => {
  const { historial, isLoading } = useHistorial();

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-full w-full">
        <Spinner />
      </div>
    );
  const historialArray = historial.historial;

  return (
    <DataTable
      columns={columns}
      data={historialArray}
      usesFacetedFilter={true}
      paddingY={2}
      pageSize={4}
    />
  );
};

export default ListaDeHistorial;
