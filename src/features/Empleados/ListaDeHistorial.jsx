import Spinner from "@/ui/Spinner";
import { useHistorial } from "./useHistorial";
import { DataTable } from "./data-table";
import { columns } from "./Columns";

const ListaDeHistorial = () => {
  const { historial, isLoading } = useHistorial();

  if (isLoading) return <Spinner />;
  const historialArray = historial.historial;

  return (
    <div className="w-full">
      <DataTable columns={columns} data={historialArray} />
    </div>
  );
};

export default ListaDeHistorial;
