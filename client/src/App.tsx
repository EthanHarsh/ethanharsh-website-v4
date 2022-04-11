import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper, CssBaseline, Typography, Grow, Link } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home.js';
import CodeIcon from '@mui/icons-material/Code';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HubIcon from '@mui/icons-material/Hub';
import { Box, flexbox } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const darkTheme = createTheme( {
  palette: {
    mode: 'dark',
  },
} );

function App ()
{
  const [ value, setValue ] = React.useState( 0 );
  const ref = React.useRef( null );
  return (
    <div className="">
      <ThemeProvider theme={ darkTheme }>
        <main>
          <div style={ { padding: '5rem' } }>
            <Typography variant="h1" className="animate__animated animate__fadeInUp">Hello,</Typography>
            <Typography variant="h2" className="animate__animated animate__fadeInUp">My name is Ethan.</Typography>
            <Typography variant="h2" className="animate__animated animate__fadeInUp">I am a Web3 Developer.</Typography>
            <Box sx={ { display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '0.5rem' } } className="animate__animated animate__fadeIn">
              <Link href="https://github.com/EthanHarsh" color="inherit">
                <GitHubIcon fontSize='large' sx={ { marginRight: '20px', fontSize: '3rem' } } />
              </Link>
              <Link href="https://www.linkedin.com/in/ethanharsh/" color="inherit">
                <LinkedInIcon fontSize='large' sx={ { marginRight: '20px', fontSize: '3rem' } } />
              </Link>
              <Link href="https://www.instagram.com/eharsh4/" color="inherit">
                <InstagramIcon fontSize='large' sx={ { fontSize: '3rem' } } />
              </Link>
            </Box>
          </div>
          <Paper sx={ { position: 'fixed', bottom: 0, left: 0, right: 0 } } elevation={ 3 }>
            <BottomNavigation
              showLabels
              value={ value }
              onChange={ ( event, newValue ) =>
              {
                setValue( newValue );
              } }
            >
              <BottomNavigationAction label="Home" icon={ <HomeIcon /> } />
              <BottomNavigationAction label="Development" icon={ <CodeIcon /> } href="https://github.com/EthanHarsh" />
              <BottomNavigationAction label="ClientHub" icon={ <HubIcon /> } href="https://secure.ethanharsh.com" />
              <BottomNavigationAction label="Writing" icon={ <LibraryBooksIcon /> } href="https://ethanharsh.medium.com/" />
            </BottomNavigation>
          </Paper>
        </main>
        <CssBaseline />
      </ThemeProvider>
    </div >
  );
}

export default App;
