import React from 'react';
import { List, ListItem } from '@material-ui/core';

import { StringAnalyzerResult } from '../../api/stringAnalyzer';

interface ResultProps {
  result: StringAnalyzerResult | undefined | 'loading';
}

export const Result: React.FC<ResultProps> = ({ result }: ResultProps) => {
  return (
    <>
      {result === 'loading' && 'loading'}
      {result && result !== 'loading' && (
        <List>
          <ListItem>
            <List>
              Text Length:
              <ListItem>
                <span aria-label="text-length-with-spaces">
                  With Spaces: <b>{result.textLength.withSpaces}</b>
                </span>
              </ListItem>
              <ListItem>
                <span aria-label="text-length-without-spaces">
                  Without Spaces: <b>{result.textLength.withoutSpaces}</b>
                </span>
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <span aria-label="word-count">
              Word Count: <b>{result.wordCount}</b>
            </span>
          </ListItem>
          <ListItem>
            <List>
              Character Count:
              {!result.characterCount.length && <b>0</b>}
              {result.characterCount.length &&
                result.characterCount.map((pair: { [key: string]: number }, index: number) => {
                  const key: string = Object.keys(pair)[0];
                  return (
                    <ListItem key={index}>
                      <span>
                        Letter <b>{`"${key.toLocaleLowerCase()}"`}</b>: <b>{pair[key]}</b>
                      </span>
                    </ListItem>
                  );
                })}
            </List>
          </ListItem>
        </List>
      )}
    </>
  );
};
