import React from 'react';
import { Button, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';

export type StringInput = {
  stringToAnalyze: string;
};

interface InputFormProps {
  onSubmit: (data: any) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      margin: theme.spacing(1),
      width: 500,
    },
  })
);

export const InputForm: React.FC<InputFormProps> = ({ onSubmit }: InputFormProps) => {
  const { handleSubmit, control } = useForm<StringInput>();
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={1}>
        <Grid item xs>
          <Controller
            name="stringToAnalyze"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField className={classes.textField} label="Enter String to Analyze" {...field} />
            )}
          />
        </Grid>
        <Grid item xs>
          <Button variant="contained" color="primary" type="submit">
            Analyze
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
