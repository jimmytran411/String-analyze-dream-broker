import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';

import { InputForm } from '../../Views/StringAnalyzer/InputForm';

test('Test submit button', async () => {
  const { getByRole } = render(<InputForm onSubmit={jest.fn()} />);

  const stringToAnalyze = getByRole('textbox', { name: '' });
  user.type(stringToAnalyze, 'Test string');
  expect(stringToAnalyze).toHaveValue('Test string');
  user.click(getByRole('button', { name: 'Analyze' }));
});
