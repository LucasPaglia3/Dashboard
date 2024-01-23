import { jsPDF } from "jspdf";

const HistorialPDF = () => {
  const generarPDF = () => {
    const doc = new jsPDF();

    doc.text("Factura", 95, 20);
    doc.text("Numero de factura", 10, 20);
    doc.text("Fecha", 10, 30);
    doc.text("Cliente", 10, 40);
    doc.text("Total", 10, 50);

    doc.save("factura_1.pdf");
  };
  return (
    <div>
      <h1>FACTURA</h1>
      <h4>LOGO</h4>
      <p>Numero factura.</p>
      <button onClick={generarPDF}>Generar PDF</button>
    </div>
  );
};

export default HistorialPDF;
