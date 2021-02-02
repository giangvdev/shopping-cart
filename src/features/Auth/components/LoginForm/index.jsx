import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from '../../../../components/Form-controls/InputFiled';
import PasswordField from '../../../../components/Form-controls/PassWordField';


const useStyles = makeStyles(theme => ({
  root:{
      paddingTop: theme.spacing(4),
      textAlign:"center",
  },

  avartar:{
    margin: '0 auto',
    backgroundColor:"red",
  },

  title: {

  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
  
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

LoginForm.defaultValues = {
  onSubmit: null,
};

function LoginForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({
      identifier: yup.string().required('nhap email vào'),
      password: yup.string().required('nhap vao di'),
 });
    const form = useForm({
        defaultValues: { 
          identifier: '',
          password: '',
            
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
      const {onSubmit} = props;
      if (onSubmit) {
          onSubmit(values);
      }
    }
    
    return (
      <div className={classes.root}>
         <Avatar className={classes.avartar}>
          <LockOutlined>
          </LockOutlined>
         </Avatar>
        <Typography component="h3" variant="h5" className={classes.title}>
            SIGN IN
        </Typography>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
           
          <InputField name="identifier" label="email" form={form} />
          <PasswordField name="password" label="Enter password" form={form} />

          <Button type="submit" variant="contained" color="primary" fullWidth className={classes.submit}>
              SIGN IN
          </Button>
     </form>

      </div>
    );
}

export default LoginForm;