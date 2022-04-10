import { Link, Container,Box} from '@chakra-ui/react'
import React from 'react';
import Sidebar from '../sidebar/Sidebar'
import './stylesFeed.css'



function Feed() {
  

  return (
    <Box >
        <Sidebar/>
        <Box background = 'var(--primary)' >
             
            <Link href='./home'  
             color={'blue.500'} > Faça Login</Link>  
        </Box>
    </Box>
    
     )
}
export default Feed;