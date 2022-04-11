import { Link,Box, Flex,Stack} from '@chakra-ui/react'
import React from 'react';
import Sidebar from '../sidebar/Sidebar.tsx'
import './stylesFeed.css'

function Feed() {
  

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md:'row' }}  >
           <Sidebar/>
           
        
           <Flex justifyContent='center'  width={'100%'}
                height={"min(285px, max(175px, 41vw)"}>
               <Link href='./home' color= {'blue.500'} > Faça Login</Link>  
           </Flex>

           <Flex  w={{ base: 'full', md: 300 }} borderLeftColor='black'>
         
            </Flex>
    </Stack>
    
     )
}
export default Feed;