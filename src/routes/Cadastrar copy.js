import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';



function Cadastrar() {
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
   <form onSubmit={handleSubmit}>
   <FormControl id="name" paddingTop={'24px'}>
   <FormLabel > Nome </FormLabel>
   <Input placeholder='E-mail' type="text" />
 </FormControl>
 <FormControl id="email" paddingTop={'24px'}>
   <FormLabel > E-mail </FormLabel>
   <Input placeholder='E-mail' type="email" />
 </FormControl>
 <FormControl id="username" paddingTop={'24px'}>
   <FormLabel > Nome de usuário</FormLabel>
   <Input placeholder='Ex.:@ruffos1234' type="text" />
 </FormControl>
 <FormControl id="password" paddingTop={'24px'}>
   <FormLabel>Senha</FormLabel>
   <Input Placeholder='Senha'type="password" />
 </FormControl>
   <Button bgColor={'#00ACC1'} color={'#FFFFFF'} variant={'solid'}border-radius= {'4px'} fontFamily= {'Open Sans'}>
     Entrar
   </Button>
   </form>
   <Heading fontSize={'16px'} fontStyle={'normal'} fontFamily= {'Open Sans'} >Já Possuo cadastro <Link href='./Cadastro'  color={'blue.500'} > Faça Login</Link> </Heading> 
 </Stack>

  );
}

export default Cadastrar;
