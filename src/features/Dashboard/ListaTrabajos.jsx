import { DataTable } from "@/components/ui/Data-Table";
import { columns } from "./AllTrabajos-Column";

const ListaTrabajos = ({ trabajos }) => {
  return (
    <div className="flex flex-col pt-5 gap-3">
      <h3 className="text-xl font-semibold">Lista de trabajos para hacer:</h3>
      <DataTable
        columns={columns}
        data={trabajos}
        pageSize={7}
        usesFacetedFilter="tipo"
        filterTitle="Tipo"
      />
    </div>
  );
};

export default ListaTrabajos;
