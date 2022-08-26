import React from 'react';
import Courses from '../../components/Course/Courses';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Index = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='min-h-screen'>
                <Courses />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Index;