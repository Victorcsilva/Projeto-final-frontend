import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
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
    
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email: <input name="email" type="text" paddingTop={'24px'}/>
        </label>{" "}
        <label>
          Senha: <input name="password" type="password" paddingTop={'24px'}/>
        </label>{" "}
        <button bgColor={'#00ACC1'} color={'#FFFFFF'} variant={'solid'}border-radius= {'4px'} fontFamily= {'Open Sans'}>
              Entrar
            </button>
      </form>
    </div>

  );
}

export default Login;
