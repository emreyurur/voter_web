import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';

const App = () => {
    return (
        <GoogleLogin
            onSuccess={(credentialResponse: CredentialResponse) => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    );
}

export default App;