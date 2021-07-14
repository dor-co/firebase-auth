import React from 'react';
import "./style.css";

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return (
        <div className='dii'>
        <section className='login'>
            <div className='loginContainer'>
                <h1 className='loginTitle'>Login</h1>
                <div className='col'>
                    <label className='lab'>Username</label>
                    <input className='inp' type='text' autoFocus required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <p className='errorMsg'>{emailError}</p>
                <div className='col'>
                    <label className='lab'>name</label>
                    <input className='inp' type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className='col'>
                    <label className='lab'>Password</label>
                    <input className='inp' type='password' autoFocus required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <p className='errorMsg'>{passwordError}</p>
                <div className='btnContainer'>
                    {hasAccount ? (
                        <>
                            <button className='btn' onClick={handleLogin}>Sign in</button>
                            <p className='lab'>don't have an account? <span onClick={() => { setHasAccount(!hasAccount) }}>sign up</span></p>
                        </>
                    ) : (
                        <>
                            <button className='btn' onClick={handleSignup}>Sign up</button>
                            <p className='lab'>have an account? <span onClick={() => { setHasAccount(!hasAccount) }}>sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
        </div>
    );
};

export default Login;