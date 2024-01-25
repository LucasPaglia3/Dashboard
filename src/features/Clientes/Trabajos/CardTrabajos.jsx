import { DataTable } from "@/components/ui/Data-Table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns } from "./Trabajos-Columns";
import { useTrabajos } from "./useTrabajos";
import Spinner from "@/components/ui/Spinner";

const CardTrabajos = () => {
  const { trabajos, isLoading } = useTrabajos();
  if (isLoading) return <Spinner />;

  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">
          Trabajos para cliente:
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-full">
          <DataTable
            columns={columns}
            data={trabajos}
            pageSize={5}
            paddingY={5}
          ></DataTable>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardTrabajos;
