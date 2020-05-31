import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/index';

import Welcome from './screens/welcome';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
}

export default App;
