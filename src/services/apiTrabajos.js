import { supabase } from "./supabase";

export const getTrabajo = async (clientId) => {
  let { data: trabajos, error } = await supabase
    .from("trabajos")
    .select("*")
    .eq("idCliente", clientId)
    .order("fechaEntrada", { ascending: false }); // Ordena para que salgan primeros en la lista los que recien fueron creados.

  if (error) {
    throw new Error("Trabajos could not be loaded. " + error.message);
  }

  return trabajos;
};
