import { supabase } from "./supabase";

export const getAllTrabajosUrlId = async () => {
  let { data, error } = await supabase.from("trabajos").select("urlId");

  if (error) {
    throw new Error(
      "urlId of table Trabajos could not be loaded." + error.message
    );
  }

  const urlIds = data.map((id) => id.urlId); // devuelve un array con todos los 'urlId' que hay en la tabla.

  return urlIds;
};

export const getTrabajo = async (clientId) => {
  let { data, error } = await supabase
    .from("trabajos")
    .select("*")
    .eq("idCliente", clientId)
    .order("fechaEntrada", { ascending: false }); // Ordena para que salgan primeros en la lista los que recien fueron creados.

  if (error) {
    throw new Error("Trabajos could not be loaded. " + error.message);
  }

  return data;
};

export const createTrabajo = async (newTrabajo) => {
  const existingUrlId = await getAllTrabajosUrlId(); // Conseguimos todos los valores de la columna urlId.
  const randomId = Math.floor(Math.random() * 9000) + 1000; // Generamos un idRandom de 4 digitos.

  if (!existingUrlId.includes(randomId)) {
    // Si no existe el id generado en la columna de urlId, creamos un trabajo.
    let { data, error } = await supabase
      .from("trabajos")
      .insert([{ ...newTrabajo, urlId: randomId }]);

    if (error) {
      throw new Error("Trabajo could not be inserted. " + error.message);
    }

    return { data, error };
  } else {
    const error = new Error(
      "El id generado para este trabajo ya existe, porfavor intente nuevamete."
    );
    return error;
  }
};
