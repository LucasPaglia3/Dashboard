import { DataTable } from "@/components/ui/Data-Table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns } from "./Trabajos-Columns";
import { useTrabajos } from "./useTrabajos";
import Spinner from "@/components/ui/Spinner";

const CardTrabajos = () => {
  const { trabajos, isLoading } = useTrabajos();
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <Card className="flex flex-col shadow-md ">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">
          Trabajos para cliente:
        </CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <DataTable columns={columns} data={trabajos} pageSize={5}></DataTable>
      </CardContent>
    </Card>
  );
};

export default CardTrabajos;
