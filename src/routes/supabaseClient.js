import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nfcowexnmovawgqryxqk.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mY293ZXhubW92YXdncXJ5eHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxMDk4NzUsImV4cCI6MjAzNzY4NTg3NX0.vij_LJYztHrKGj2RYXNPcoJKq3Rjrv7TPIaiK7IDDEs'; // Replace with your Supabase API key
export const supabase = createClient(supabaseUrl, supabaseKey);