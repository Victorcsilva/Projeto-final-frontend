import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'



function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
  }

  return (
 <Stack>
          <Heading fontSize={'36px'} color={'#00ACC1'} fontFamily= {'Open Sans'} >Comece agora.<p>Conecte-se já.</p></Heading>
          <Heading fontSize={'24px'} paddingTop={'24px'} fontFamily= {'Open Sans'}> Login </Heading>
  <FormControl 
       id="email"
       paddingTop={'24px'}>
       <FormLabel > E-mail </FormLabel>
       <Input placeholder='E-mail' type="email" />
  </FormControl>
        <FormControl 
        id="password"
        paddingTop={'24px'}>
        <FormLabel>Senha</FormLabel>
        <Input Placeholder='Senha'type="password" />
      </FormControl>
         <Button 
          bgColor={'#00ACC1'} 
          color={'#FFFFFF'} 
          variant={'solid'}
          border-radius= {'4px'} 
          fontFamily= {'Open Sans'}>
           Entrar
      </Button>
          <Heading fontSize={'16px'} fontStyle={'normal'} fontFamily= {'Open Sans'} > Ainda não possui uma conta? 
          <Link to = "/Cadastro"> Cadastrar-se</Link> </Heading> 
 </Stack>

  );
}

export default Login;
