import React from 'react';
import { render } from '@testing-library/react';

import { Result } from '../../Views/StringAnalyzer/Result';
import { StringAnalyzerResult } from '../../api/stringAnalyzer';

test('Test submit button', async () => {
  const testResult: StringAnalyzerResult = {
    textLength: {
      withSpaces: 10,
      withoutSpaces: 9,
    },
    wordCount: 2,
    characterCount: [{ a: 3 }, { b: 1 }, { c: 2 }, { e: 3 }],
  };
  const { getByLabelText } = render(<Result result={testResult} />);

  expect(getByLabelText(/text-length-with-spaces/)).toHaveTextContent(/10/i);
  expect(getByLabelText(/text-length-without-spaces/)).toHaveTextContent(/9/i);
  expect(getByLabelText(/word-count/)).toHaveTextContent(/2/i);
});
