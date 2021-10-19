import React from 'react'
import {TextField,Grid} from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form';



const FormInput =({ name, label, required }) =>{
    const { control } = useFormContext();
    const isError = false;
  
    return (
      <Grid item xs={12} sm={6}>
        <Controller 
        defaultValue=""
        render={({ field }) => 
        <TextField {...field} label={label} 
        fullWidth   required/>}

        control={control}      
        name={name}
        />
      </Grid>
    );
  }
  
  export default FormInput;
