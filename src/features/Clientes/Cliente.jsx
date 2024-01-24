import CardCliente from "@/components/ui/CardCliente";

const Cliente = ({ cliente }) => {
  return (
    <div className="grid grid-cols-1">
      <CardCliente cliente={cliente} />
    </div>
  );
};

export default Cliente;
