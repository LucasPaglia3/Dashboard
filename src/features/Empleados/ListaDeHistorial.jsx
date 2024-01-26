import Spinner from "@/components/ui/Spinner";

import { DataTable } from "../../components/ui/Data-Table";
import { columns } from "./Empleados-Columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ListaDeHistorial = ({ historial }) => {
  const historialArray = historial.historial;

  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-lg">
          Historial de Horarios:
        </CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={historialArray}
          usesFacetedFilter="mes"
          filterTitle="Mes"
          paddingY={2}
          pageSize={4}
        />
      </CardContent>
    </Card>
  );
};

export default ListaDeHistorial;
