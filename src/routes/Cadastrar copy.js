import { useForm, Link } from "react-hook-form"
import  {yupResolver} from  '@hookform/resolvers/yup'
import * as yup from 'yup'
import { createPosts }from './services/posts'


const schema = yup.object({
  name: yup.string().required("Coloque o nome" ),
  email: yup.string().required(" E-mail invalido" ),
  username: yup.string(),
  password:yup.min(8, 'No minimo 8 caracteres')
  .required('conteudo obrigatório')
}).required();

function App() {


  const { register, 
    handleSubmit,       
    formState: { errors } 
  } = useForm({resolver: yupResolver (schema)});

  const onSubmit = async (data) => {
    console.log(data);
    try{
   const response = await createPosts(data);
   console.log(response)
    }catch(error){
        console.log(error)
      }
  };

  return ( 
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder = "Nome"{...register('name')} />
      {errors.title && <span>{errors.name.message}</span>}
      <input type="email" placeholder = "E-mail"{...register('email')} />
      {errors.title && <span>{errors.email.message}</span>}
      <input type="text" placeholder = "Nome de Usuário"{...register('username')} />
      {errors.title && <span>{errors.username.message}</span>}
      <input type="password" placeholder = "Senha"{...register('password')} />
      {errors.title && <span>{errors.password.message}</span>}
      <button type='submit'>Cadastrar</button>
      <Heading fontSize={'16px'} fontStyle={'normal'} fontFamily= {'Open Sans'} >Já Possuo cadastro <Link href='./Cadastro'  color={'blue.500'} > Faça Login</Link> </Heading> 
      
    </form>
  );
}

export default App;