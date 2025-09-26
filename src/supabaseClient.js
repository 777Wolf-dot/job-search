// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Get these from your Supabase project settings
const SUPABASE_URL = "https://afwoovvkjgbwgoerduva.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmd29vdnZramdid2dvZXJkdXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4NjI3NTAsImV4cCI6MjA3NDQzODc1MH0.seE0dr2C2k9vRI3yv4DE650jV8_9Iwm-3JHLyerB5TY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
