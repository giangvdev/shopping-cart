import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
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



RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
    
};

function RegisterForm(props) {
    const classes = useStyles();
    const schema = yup.object().shape({
       fullname: yup.string().required('nhap vao di'),
 });
    const form = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            passWord: '',
            retypepassWord: '',
            
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
            Create An Acccout
        </Typography>
    <form onSubmit={form.handleSubmit(handleSubmit)}> 
          <InputField name="fullname" label="full name" form={form} />
          <InputField name="email" label="email" form={form} />
          <PasswordField name="password" label="password" form={form} />
          <PasswordField name="retypepassWord" label="retypepassWord" form={form} />

          <Button type="submit" variant="contained" color="primary" fullWidth className={classes.submit}>
              SIGN UP
          </Button>
     </form>

      </div>
    );
}

export default RegisterForm;