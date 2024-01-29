// Utilizado al crear un trabajo.
export const generateRandomId = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyz1234567890";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

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

export const formatDate = (timestampString) => {
  const timestamp = new Date(timestampString);
  const options = { day: "2-digit", month: "numeric", year: "numeric" };
  return timestamp.toLocaleDateString("es-AR", options);
};
