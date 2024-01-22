export const getMonthName = () => {
  const today = new Date();
  return today.toLocaleString("es-AR", { month: "long" });
};

export const getQuincena = () => {
  const today = new Date();
  const dayOfMonth = today.getDate();

  let quincena = dayOfMonth <= 15 ? "primera" : "segunda";

  return quincena;
};

export const getYear = () => {
  const today = new Date();
  const year = today.getFullYear();
  return year;
};
