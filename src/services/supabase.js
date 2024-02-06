import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseUrl = "https://oqseibwyjskzbfzsfoag.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xc2VpYnd5anNremJmenNmb2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3ODMwMDgsImV4cCI6MjAyMTM1OTAwOH0.KfAOZartfaM9IZ2zaovhbavsKKBOYGCMfJtUIK60WHI";
export const supabase = createClient(supabaseUrl, supabaseKey);
