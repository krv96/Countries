import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

function NavigationComponent() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <Box sx={{ flexGrow: 0 }}>
            <h1>Where in the world?</h1>
        </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationComponent;