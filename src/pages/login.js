import React from 'react';
import CustomInput from '../components/CustomInput';

function Login () {
    return (
        <div className='Login'>
            <h2>Login</h2>
            <form>
                <CustomInput labelled="E-mail" />
            </form>
        </div>
    )
}

export default Login;