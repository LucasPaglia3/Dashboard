import { DataTable } from "@/components/ui/Data-Table";
import { useClientes } from "./useClientes";
import { columns } from "./Clientes-Columns";
import Spinner from "@/components/ui/Spinner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const ListaClientes = () => {
  const { clientes, isLoading } = useClientes();

  if (isLoading) return <Spinner />;

  const clientesArray = clientes.clientes;
  console.log(clientesArray);

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Lista de Clientes</h1>
        <Dialog>
          <DialogTrigger>
            <Button variant="blue" className="flex items-center">
              <Plus className="mr-1 h-5 w-5" />
              <span>Agregar nuevo cliente</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Agregar nuevo cliente</DialogTitle>
              <DialogDescription>
                Rellená los datos correspondientes.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable
        data={clientesArray}
        columns={columns}
        paddingY={2}
        pageSize={10}
      />
    </div>
  );
};

export default ListaClientes;
