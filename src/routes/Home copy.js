import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text
} from '@chakra-ui/react';
import dogimage from '../images/dog1.png'
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useForm } from "react-hook-form";
import symbol from '../images/symbol.png'
import patas from '../images/pets.png'
import  { login } from '../services/auth'
import  {yupResolver} from  '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email().required(" E-mail invalida" ),
  senha: yup.string().min(8,"Senha invalida"),
}).required();

function Login() {
  const { register, 
          handleSubmit,       
          formState: { errors } 
        } = useForm({resolver: yupResolver (schema)});
  const onSubmit =  async (data) => {
    console.log(data);
    try{
      const response = await login(data);
      console.log(response);
    } catch (error){
      console.log(error);
    }
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md:'row-reverse' }}>
      <Flex p={8} flex={1} align={'center'} justify={'flex-start'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Flex flex={1} >
             <Image src={symbol}/>
          </Flex>
          <Heading fontSize={'36px'} color={'#00ACC1'} fontFamily= {'Open Sans'} >Comece agora.<p>Conecte-se já.</p></Heading>
          <Heading fontSize={'24px'} paddingTop={'24px'} fontFamily= {'Open Sans'}> Login </Heading>
           
           
          <form onSubmit={handleSubmit(onSubmit)}>
      
           <input  {...register("email",)} />
             
              {errors.email && <span>{errors.email.message}</span>}
      
          <input  type= 'password' {...register("senha" )} />
      
               {errors.senha && <span>{errors.senha.message}</span>}
      
          <button type="submit" bgColor={'#00ACC1'} color={'#FFFFFF'} variant={'solid'}border-radius= {'4px'} fontFamily= {'Open Sans'}>
                Entrar </button>
          </form>




          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
            </Stack>
            <Button bgColor={'#00ACC1'} color={'#FFFFFF'} variant={'solid'}border-radius= {'4px'} fontFamily= {'Open Sans'}>
              Entrar
            </Button>
            <Heading fontSize={'16px'} fontStyle={'normal'} fontFamily= {'Open Sans'} > Ainda não possui uma conta? <Link href='/Cadastro'  color={'blue.500'} > Cadastrar-se</Link> </Heading> 
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} backgroundImage = {dogimage} backgroundRepeat ={'no-repeat'} position={'stact'} w={'100%'} align={'center'} justify='center'>
        <Image src={patas} />
        <Text fontSize={'51.5px'} color={'#FFFFFF'} fontFamily= {'Roboto'}  fontWeight={'700'} >PETWITTER</Text>
      </Flex>
    </Stack>
  );
}
export default Login;
