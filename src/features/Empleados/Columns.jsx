export const columns = [
  {
    accessorKey: "mes",
    filterFn: (row, mes, value) => {
      return value.includes(row.getValue(mes));
    },
    header: "Mes",
  },
  {
    accessorKey: "quincena",
    filterFn: (row, quincena, value) => {
      return value.includes(row.getValue(quincena));
    },
    header: "Quincena",
  },
  {
    accessorKey: "año",
    filterFn: (row, año, value) => {
      return value.includes(row.getValue(año));
    },
    header: "Año",
  },
];
