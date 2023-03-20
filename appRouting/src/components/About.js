import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from './Navbar'
export default function About() {
    return (<React.Fragment>

      <CssBaseline />

      <Container >
      <Navbar/>

        <Box sx={{  height: '100vh',width:'100vw',padding:'100px' }} >
         
            <p>About. Lorem ipsum dolore cupidatat mollit 
            deserunt anim officia do elit elit minim exercitation.
            Incididunt deserunt consectetur aute cupidatat anim sed commodo sint occaecat est non exercitation dolore est labore et reprehenderit in ea amet aliqua ea anim ex.
            .</p>
        </Box>
      </Container>
    </React.Fragment>

    )
}