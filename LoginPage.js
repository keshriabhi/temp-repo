import React from 'react';
import Classes from './Login.module.css';
import Topbar from './Topbar';

const LoginPage = () =>{
    return (
        <div>
            <Topbar/>
            <div className={Classes.container}>
                <h1 className={Classes.heading}>Hostel Allocation</h1>
                <h2 className={Classes.subheading}>Please sign-in</h2>
                <button className={Classes.googleBtn}><i class="fab fa-google"></i>Sign in with Google</button>
                <button className={Classes.facebookBtn}><i class="fab fa-facebook-square"></i>Sign in with Facebook</button>
            </div>
        </div>
    )
}

export default LoginPage;