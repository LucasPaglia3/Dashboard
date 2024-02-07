import { DataTable } from "@/components/ui/Data-Table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns } from "./TareasRealizadas-Columns";
import FormAgregarTareas from "./FormAgregarTareas";

const TareasRealizadas = ({ trabajo }) => {
  return (
    <Card className="shadow-md col-span-1 lg:col-span-2 h-full pb-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">Tareas Realizadas</CardTitle>
        <FormAgregarTareas />
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <DataTable
          data={trabajo.tareas_realizadas}
          columns={columns}
          pageSize={5}
        ></DataTable>
      </CardContent>
    </Card>
  );
};

export default TareasRealizadas;
