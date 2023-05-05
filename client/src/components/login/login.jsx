import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useNavigate } from 'react-router-dom';

const supabase = createClient('https://ulobuwxqwbruszgeonsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsb2J1d3hxd2JydXN6Z2VvbnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMzEzMDEsImV4cCI6MTk5ODgwNzMwMX0.qRgmFEWxzrDgjB5pjYi8MfmbaAcRvJCI-f5ZPA3YYJE')

function Login(){
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange(async(event) => {
    if (event!=="SINGED_OUT"){
        //forward to success url
        navigate("/home.jsx");
    }
    else{
        //forward to localhost:3000
        navigate("/login.jsx");

    }
  });


return (
  <div classsName="App">
    <header className="App-header">
      <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={['google', 'facebook', 'twitter']}
      theme="dark"
      />
    </header>
  </div>
  
);
}
export default Login;