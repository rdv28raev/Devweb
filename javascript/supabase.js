const SUPABASE_URL = 'https://YOUR-PROJECT-ID.supabase.co'
const SUPABASE_ANON_KEY = 'eyJ...your-anon-key...'

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
window.supabaseClient = supabaseClient
console.log('Supabase connected!')
