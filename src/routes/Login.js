import React from 'react'
import { useAuth } from '../context/auth-context'
import { useLocation, useNavigate, Link} from 'react-router-dom'


import {
 Heading,
  Stack,
} from '@chakra-ui/react';



export default function Login() {
  const auth = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    const data = {
      email,
      password,
    }
    auth.login(data, () => navigate(from, { replace: true }))
  }
  return (
    <Stack>
    <Heading fontSize={'36px'} color={'#00ACC1'} fontFamily= {'Open Sans'} >Comece agora.<p>Conecte-se já.</p></Heading>
    <Heading fontSize={'24px'} paddingTop={'24px'} fontFamily= {'Open Sans'}> Login </Heading>
      
      <form onSubmit={handleSubmit}>
        <label>
          E-mail: <input type="email" name="email" />
        </label>
        <label>
          Senha: <input type="password" name="password" />
        </label>
        <button className='buttonall' type="submit">Login</button>
      </form>
      

      <Heading fontSize={'16px'} fontStyle={'normal'} fontFamily= {'Open Sans'} > Ainda não possui uma conta? 
          <Link to = "/Cadastro"> Cadastrar-se</Link>
          <Link to = "/Feed">Feed</Link> </Heading> 
          </Stack>  )
}
/*function Login() {
  const { register, 
         handleSubmit,   
          formState: { errors },
         } = useForm();
  const onSubmit = async (data) => {
  console.log(data);
try {
  const response = await login (data);
  console.log(response);
}catch (error){
  console.log(error)
}
  }
  return (
 <Stack>
          <Heading fontSize={'36px'} color={'#00ACC1'} fontFamily= {'Open Sans'} >Comece agora.<p>Conecte-se já.</p></Heading>
          <Heading fontSize={'24px'} paddingTop={'24px'} fontFamily= {'Open Sans'}> Login </Heading>
          
  <form onSubmit={handleSubmit(onSubmit)}>
      
        <input type="email" {...register("email", { required: true })} />
      
      
        <input type='password'{...register("password", { required: true })} />
     
         {errors.password && <span>This field is required</span>}
      
         <button 
          bgColor={'#00ACC1'} 
          color={'#FFFFFF'} 
          variant={'solid'}
          border-radius= {'4px'} 
          fontFamily= {'Open Sans'}>
           Entrar
      </button>
    </form>
  
          <Heading fontSize={'16px'} fontStyle={'normal'} fontFamily= {'Open Sans'} > Ainda não possui uma conta? 
          <Link to = "/Cadastro"> Cadastrar-se</Link> </Heading> 
 </Stack>

  );
  }
  

export default Login;*/
