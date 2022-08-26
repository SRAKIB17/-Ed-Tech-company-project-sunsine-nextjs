/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import email from './Svg/email-svgrepo-com.svg';
import password from './Svg/password-svgrepo-com.svg';
import userProfile from './Svg/user-svgrepo-com.svg';
import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Google from '../LogoSvg/Google.jsx'
import Facebook_oval from '../LogoSvg/Facebook_oval.jsx'
import axios from 'axios'
// import Loading from '../Loading/Loading';
import { useRouter } from 'next/router'
import Loading from '../Loading/Loading';


const Login = () => {

    const router = useRouter()
    const { return_ } = router.query;
    const { register, handleSubmit } = useForm();
    const [registerUser, setRegisterUser] = useState(true)
    const [resetPass, setResetPass] = useState(false)
    const [loadingLogin, setLoadingLogin] = useState(null)

    const registerHandlar = () => {
        setResetPass(false)
        setRegisterUser(!registerUser)
    }

    // for email passeword register 
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error6] = useUpdateProfile(auth);
    // for login 
    const [signInWithEmailAndPassword, user1, loading1, error1] = useSignInWithEmailAndPassword(auth);

    // for google login 
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    // for facebook Login 
    const [signInWithFacebook, use3, loading3, error3] = useSignInWithFacebook(auth);

    // for reset password 
    const [sendPasswordResetEmail, sending, error4] = useSendPasswordResetEmail(auth);

    // for error handle 
    let errMsg
    const [user5, loading5, error5] = useAuthState(auth);
    if (loading5) {
        return <Loading />
    }
    if (error || error1 || error2 || error3 || error4 || error5 || error6) {
        const err = error?.message || error1?.message || error2?.message || error3?.message || error4?.message || error5?.message || error6?.message
        errMsg = err.split('/')[1].slice(0, err.split('/')[1].length - 2).split('-').join(' ').toUpperCase()

    }
    if (user5) {
        const url = '/'
        router.replace(return_ ? return_ : url)
    }
    const onSubmit = async data => {
        setLoadingLogin(true)
        //    for signin 
        if (!resetPass && registerUser) {
            await signInWithEmailAndPassword(data.email, data.password)
        }
        // new account 
        else if (!resetPass && !registerUser) {
            await createUserWithEmailAndPassword(data.email, data.password)
            await updateProfile({ displayName: data.name })
        }
        // reset pass 
        else if (resetPass) {
            await sendPasswordResetEmail(data.email)
            // toast.success('send reset link on email')
        }
        setLoadingLogin(null)
        // const getToken = await axios.post('https://vast-ridge-91427.herokuapp.com/login', data);
        // localStorage.setItem('token', getToken.data)
    }
    return (
        <div>
            {
                loadingLogin &&
                <div className='absolute flex justify-center items-center w-full z-10 mt-10'>
                    <div className=' w-40 h-40 rounded-full border-b-4 animate-spin border-pink-600  '>

                    </div>
                </div>
            }
            <div className='loginForm'>
                <h4 className='text-xl mt-4'>{resetPass ? 'Reset Password' : (registerUser ? 'Login' : 'New Account')}</h4>
                <span className='h-5'>
                    <small style={{ color: 'red' }}>{errMsg}</small>
                </span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        resetPass || (registerUser ||
                            <div>
                                <img src={userProfile.src} alt="" />
                                <input placeholder='name' type='text' {...register("name", { required: true, maxLength: 20 })} />
                            </div>)
                    }

                    <div>
                        <img src={email.src} alt="" />
                        <input placeholder='email' type='email' {...register("email", { required: true })} />

                    </div>
                    {
                        resetPass ||
                        <div>
                            <img src={password.src} alt="" />
                            <input placeholder='password' type="password" {...register("password", { required: true })} />
                        </div>
                    }
                    <input type="submit" value={resetPass ? 'Reset Password' : (registerUser ? 'Login' : 'Register')} className="btn btn-sm font-extralight w-full btn-success text-white" />
                </form>
                <div className='or'>
                    <div></div>
                    <p>Or</p>
                    <div></div>
                </div>
                <div className='flex justify-center flex-col gap-2'>
                    {
                        resetPass || <>
                            <button
                                className='flex items-center btn text-white btn-success font-extralight btn-sm gap-1'
                                onClick={() => signInWithGoogle()}
                            >
                                <Google size="20" color="currentColor" />
                                <span>
                                    {registerUser ? 'Login ' : 'Register '}
                                    with Google
                                </span>
                            </button>
                            <button className='resetPass' onClick={() => setResetPass(!resetPass)}>Reset Password?</button>
                        </>
                    }
                    <button className='already' onClick={registerHandlar}> {registerUser ? 'Create new Account' : 'Already have account Login'}</button>
                </div>
            </div>

        </div>
    );
};

export default Login;

// { pattern: /^[A-Za-z]+$/i })}