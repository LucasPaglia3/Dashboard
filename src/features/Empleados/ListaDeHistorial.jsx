import { useHistorial } from "./useHistorial";
import { Spinner } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const columns = [
  {
    key: "mes",
    label: "MES",
  },
  {
    key: "quincena",
    label: "QUINCENA",
  },
  {
    key: "año",
    label: "AÑO",
  },
];

const ListaDeHistorial = () => {
  const { historial, isLoading } = useHistorial();

  if (isLoading) return <Spinner />;
  const historialArray = historial.historial;
  console.log(historial.historial);

  return (
    <>
      <Table isStriped aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={historialArray}>
          {(item) => (
            <TableRow key={item}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default ListaDeHistorial;
