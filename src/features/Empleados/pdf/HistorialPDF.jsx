import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";

const HistorialPDF = ({ tableData, año, mes, quincena }) => {
  const generarPDF = () => {
    const doc = new jsPDF();
    const logo = new Image();
    logo.src = "/logo2-done-1.png";
    console.log(logo);

    // Estilos
    const title = "Horas de trabajo.";
    const subTitle = `${quincena} quincena de ${mes} ${año}`;
    const centerTextX = (text) =>
      (doc.internal.pageSize.getWidth() - doc.getTextWidth(text)) / 2;

    // Encabezado TODO: HACERLO MAS FACHA.
    doc.addImage(logo, "PNG", 83, 5, 42, 40);
    doc.text(`Horas de trabajo`, centerTextX(title), 53);
    doc.text(
      `${quincena} quincena de ${mes} ${año}`,
      centerTextX(subTitle),
      60
    );

    // Crear una tabla para los detalles de la factura.
    const columns = ["Empleado", "Horas"];

    logo.onload = () => {
      doc.autoTable({
        startY: 70,
        head: [columns],
        styles: {
          cellPadding: 3,
          fontSize: 14,
          lineWidth: 0.35,
          lineColor: 150,
        },
        body: tableData.map(({ empleado, horas }) => {
          return [empleado, horas];
        }),
        bodyStyles: {
          margin: 40,
          fontSize: 13,
          lineWidth: 0.35,
          lineColor: 150,
          textColor: [0, 0, 0],
        },
      });

      // Guardar pdf con nombre especifico.
      doc.save(`Horas-${mes}-${quincena}Quincena-${año}.pdf`);
    };
  };

  return (
    <div>
      <Button
        className=" border-slate-300 shadow-sm"
        variant="outline"
        onClick={generarPDF}
      >
        <Download className="h-5 w-5 mr-2" /> <span>Descargar PDF</span>
      </Button>
    </div>
  );
};

export default HistorialPDF;
