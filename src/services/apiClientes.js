import { supabase } from "./supabase";

export const getAllClientes = async () => {
  const { data: clientes, error } = await supabase.from("clientes").select("*");

  if (error) {
    throw new Error("Clientes could not be loaded. " + error.message);
  }

  return { clientes };
};

export const getCliente = async (id) => {
  const { data: cliente, error } = await supabase
    .from("clientes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Clientes could not be loaded. " + error.message);
  }

  return cliente;
};
