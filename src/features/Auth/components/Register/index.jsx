import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useDispatch } from 'react-redux';
import { register } from '../../userSice';
import RegisterForm from '../RegisterForm/index';


Register.propTypes = {
    closeDialog: propTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();

    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async (values) => {
      console.log("form submit:", values);
      try {
         console.log('Form Submit', values);
         values.username = values.email;
        const action = register(values);
         const resultAction = await dispatch(action);
        const user = unwrapResult(resultAction);
         // close dialog 

         const {closeDialog} = props;
          if(closeDialog) {
              closeDialog();
          }

        console.log('NEW USER', user);
          enqueueSnackbar('Dang ky thanh cong', {variant: 'success'});
          } catch (error) {
           console.log('loi' , error );
        }
    };
    return (
        <div>
           <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;