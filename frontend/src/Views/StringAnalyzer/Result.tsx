import React from 'react';
import { Grid } from '@material-ui/core';

import { StringAnalyzerResult } from '../../api/stringAnalyzer';

interface ResultProps {
  result: StringAnalyzerResult | undefined | 'loading';
}

export const Result: React.FC<ResultProps> = ({ result }: ResultProps) => {
  return (
    <>
      {result === 'loading' && 'loading'}
      {result && result !== 'loading' && (
        <Grid container direction="column" spacing={2}>
          <Grid item xs>
            Text Length:
            <Grid item xs>
              With Spaces: <b>{result.textLength.withSpaces}</b>
            </Grid>
            <Grid item xs>
              Without Spaces: <b>{result.textLength.withoutSpaces}</b>
            </Grid>
          </Grid>
          <Grid item xs>
            <span>
              Word Count: <b>{result.wordCount}</b>
            </span>
          </Grid>
          <Grid item xs>
            Character Count:
            {!result.characterCount.length && <b>0</b>}
            {result.characterCount.map((pair: { [key: string]: number }, index: number) => {
              const key: string = Object.keys(pair)[0];
              return (
                <Grid item xs key={index}>
                  Letter {`"${key.toLocaleLowerCase()}"`}: <b>{pair[key]}</b>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      )}
    </>
  );
};
