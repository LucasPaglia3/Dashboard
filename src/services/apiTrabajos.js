import { generateRandomId } from "@/utils/helpers";
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

export const getTrabajoUrlId = async (urlId) => {
  let { data: trabajo, error } = await supabase
    .from("trabajos")
    .select("*")
    .eq("urlId", urlId)
    .single();

  if (error) {
    throw new Error("Could not get trabajo by urlId" + error.message);
  }

  return trabajo;
};

export const getTrabajoClientId = async (clientId) => {
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
  const randomId = generateRandomId(4); // Generamos un idRandom de 4 digitos.

  if (existingUrlId.includes(randomId)) {
    // Si existe el id generado en la columna de urlId, tiramos un error.
    const error = new Error(
      "El id generado para este trabajo ya existe, ejecutando nuevamente..."
    );
    return error;
  }

  let { data, error } = await supabase
    .from("trabajos")
    .insert([{ ...newTrabajo, urlId: randomId }])
    .select();

  if (error) {
    throw new Error("Trabajo could not be inserted. " + error.message);
  }

  return { data, error };
};
