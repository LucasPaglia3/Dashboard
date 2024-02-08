import { DataTable } from "@/components/ui/Data-Table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns } from "./TareasRealizadas-Columns";
import FormAgregarTareas from "./FormAgregarTareas";
import { useTareaById } from "./useTareaById";
import Spinner from "@/components/ui/Spinner";

const TareasRealizadas = () => {
  const { tareas, isLoading } = useTareaById();
  if (isLoading) return <Spinner />;

  console.log(tareas);
  return (
    <Card className="shadow-md col-span-1 lg:col-span-2 h-full pb-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">Tareas Realizadas</CardTitle>
        <FormAgregarTareas />
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <DataTable data={tareas} columns={columns} pageSize={5} />
      </CardContent>
    </Card>
  );
};

export default TareasRealizadas;
