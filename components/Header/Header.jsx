/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user5, loading5, error5] = useAuthState(auth);
    return (
        <div className='bg-base-300 w-full pl-4 pr-4'>
            <div className="navbar">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl" href='/'><img src="/logo.png" alt="" className='w-full h-full' /></a>
                </div>
                <div className="flex-none">
                    {
                        user5 ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user5?.photoURL} alt='profile' className='w-full' />
                                    </div>
                                </label>
                                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><button onClick={() => signOut(auth)}>Logout</button></li>
                                </ul>
                            </div>
                            :
                            <div>
                                <a href="login" className='btn btn-info text-white btn-sm font-extralight'>Login</a>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;