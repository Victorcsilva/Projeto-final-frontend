import {
  Flex,
  Stack,
  Image,
  Text
} from '@chakra-ui/react';
import dogimage from '../images/dog1.png'
import Login from './Login'
import patas from '../images/pets.png'
import symbol from '../images/symbol.png'

function Home() {
  return (
<Stack minH={'100vh'} direction={{ base: 'column', md:'row-reverse' }}>
      <Flex p={12} flex={1} align={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Flex flex={1} >
              <Image src={symbol}/>
          </Flex>
              <Login/>
        </Stack>
         </Flex>
      <Flex flex={1} backgroundImage = {dogimage} backgroundRepeat ={'no-repeat'} position={'stact'} w={'50%'} align={'center'} justify='center'>
             <Image src={patas} />
            <Text fontSize={'51.5px'} color={'#FFFFFF'} fontFamily= {'Roboto'}  fontWeight={'700'} >PETWITTER</Text>
      </Flex>
</Stack>
  );
}
export default Home;
