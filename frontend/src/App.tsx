import React from 'react';
import { Grid } from '@material-ui/core';

import { StringAnalyzer } from './Views/StringAnalyzer';

const App: React.FC = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs>
        <h3 style={{ textAlign: 'center' }}>String Analyzer</h3>
      </Grid>
      <Grid item xs>
        <StringAnalyzer />
      </Grid>
    </Grid>
  );
};

export default App;
