import React, { useState } from 'react';
import { createStyles, Grid, makeStyles } from '@material-ui/core';

import { analyseString, StringAnalyzerResult } from '../../api/stringAnalyzer';
import { InputForm, StringInput } from './InputForm';
import { Result } from './Result';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginLeft: 20,
    },
  })
);

export const StringAnalyzer: React.FC = () => {
  const [anaylizedResult, setAnalyzedResult] = useState<StringAnalyzerResult | 'loading'>();

  const classes = useStyles();

  const handleSubmit = async (formData: StringInput) => {
    const { data } = await analyseString(formData.stringToAnalyze);
    data ? setAnalyzedResult(data) : setAnalyzedResult('loading');
  };

  return (
    <Grid className={classes.root} container direction="column" spacing={2}>
      <Grid item xs>
        <InputForm onSubmit={handleSubmit} />
      </Grid>
      <Grid item xs>
        <Result result={anaylizedResult} />
      </Grid>
    </Grid>
  );
};
