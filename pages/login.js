import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';

const login = () => {
    return (
        <div>
            <Header />
            <div className='min-h-screen'>
                <Login />
            </div>
            <Footer />
        </div>
    );
};

export default login;