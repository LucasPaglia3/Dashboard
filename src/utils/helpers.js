export const getMonthName = () => {
  const today = new Date();
  const month = today.toLocaleString("es-AR", { month: "long" });
  const capitalize = month.charAt(0).toUpperCase() + month.slice(1);
  return capitalize;
};

export const getQuincena = () => {
  const today = new Date();
  const dayOfMonth = today.getDate();

  let quincena = dayOfMonth <= 15 ? "Primera" : "Segunda";

  return quincena;
};

export const getYear = () => {
  const today = new Date();
  const year = today.getFullYear();
  return year;
};
