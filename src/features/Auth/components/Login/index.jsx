import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../userSice';
import LoginForm from '../LoginForm';

Login.propTypes = {

}

function Login(props) {
    const dispatch = useDispatch();
    const history = useHistory();

  useEffect(() =>{
    const token = localStorage.getItem('access_token');
    if(token) {
        history.push('/');
        return;
    }

  }, []);
    
    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async (values) => {
        console.log(values)
        try {
            console.log('Form Submit', values);
            values.username = values.email;
           const action = login(values);
            const resultAction = await dispatch(action);
           const user = unwrapResult(resultAction);
             history.push('/');
            // close dialog 
   
            const {closeDialog} = props;
             if(closeDialog) {
                 closeDialog();
             }
             console.log('NEW USER', user);

             } catch (error) {
              console.log('loi' , error );
           }
    };

    return (
        <div>
           <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;