import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://ulobuwxqwbruszgeonsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsb2J1d3hxd2JydXN6Z2VvbnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMzEzMDEsImV4cCI6MTk5ODgwNzMwMX0.qRgmFEWxzrDgjB5pjYi8MfmbaAcRvJCI-f5ZPA3YYJE')

const LoginPage = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    providers={['google', 'facebook', 'twitter']}
  />
)

export default LoginPage;
