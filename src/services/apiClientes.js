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

export const createCliente = async (newCliente) => {
  const { data: cliente, error } = await supabase
    .from("clientes")
    .insert([{ ...newCliente }])
    .select();

  if (error) {
    throw new Error("Cliente could not be created. " + error.message);
  }

  return cliente;
};
