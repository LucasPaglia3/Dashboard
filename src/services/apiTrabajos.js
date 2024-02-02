import { generateRandomId } from "@/utils/helpers";
import { supabase, supabaseUrl } from "./supabase";

export const getAllTrabajos = async () => {
  let { data, error } = await supabase.from("trabajos").select("*");

  if (error) {
    throw new Error("Could not get Trabajos" + error.message);
  }

  return data;
};

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
  const randomId = generateRandomId(5); // Generamos un idRandom de 4 digitos.

  if (existingUrlId.includes(randomId)) {
    // Si existe el id generado en la columna de urlId, tiramos un error.
    const error = new Error(
      "El id generado para este trabajo ya existe, intente nuevamente..."
    );
    return error;
  }

  let { data, error } = await supabase
    .from("trabajos")
    .insert([{ ...newTrabajo, urlId: randomId, estado: "espera" }])
    .select();

  console.log(error);

  if (error) {
    throw new Error("Trabajo could not be inserted. " + error.message);
  }

  return data;
};

export const editTrabajo = async (newTrabajo, idToEdit) => {
  const hasImagePath = newTrabajo.image?.startsWith?.(supabaseUrl); // Nos fijamos si ya tiene un path la imagen
  const imageName = `${Math.random()}-${newTrabajo.image.name}`.replaceAll(
    // Creamos un nombre para la imagen
    "/",
    ""
  );

  console.log(hasImagePath);
  console.log(imageName);

  const imagePath = hasImagePath
    ? newTrabajo.image
    : `${supabaseUrl}/storage/v1/object/public/trabajos-images/${imageName}`; // Si no tiene un path, creamos uno con incluyendo el nombre de la img.

  console.log(idToEdit);

  let { data, error } = await supabase
    .from("trabajos")
    .update({ ...newTrabajo, image: imagePath })
    .eq("id", idToEdit)
    .select();

  if (error) {
    throw new Error("Trabajo could not be updated. " + error.message);
  }

  // Subimos la img
  const { storageError } = await supabase.storage
    .from("trabajos-images")
    .upload(imageName, newTrabajo.image);

  if (storageError) {
    throw new Error("Could not upload an image for trabajos.");
  }

  return data;
};
