const SUPABASE_URL = 'https://civsvdggtuskhcqhpyge.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_G8OwhjQplOyYMZy9T4TqzQ_ejb5P98d'

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
window.supabaseClient = supabaseClient
console.log('Supabase connected!')
