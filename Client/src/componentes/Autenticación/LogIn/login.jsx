import React from "react";
import styles from './login.module.css'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    
    return (
        <div className={styles.container}>
            <div>
                <form className={styles.form}>
                <button className={styles.btn} onClick={() => loginWithRedirect()}>
                     Log In
                </button>
                </form>
            </div>
        </div>
    );
};

export default Login;