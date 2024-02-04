import { supabase } from "./supabase";

export const login = async ({ email, password }) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Could not login!" + error.message);
  }
  return data;
};

export const getCurrentUser = async () => {
  let { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error("Could not login!" + error.message);
  }
  return data?.user;
};
