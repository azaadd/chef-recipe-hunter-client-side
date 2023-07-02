import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import Banners from '../pages/Home/Home/Banners';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banners></Banners>
            <Footer></Footer>
        </div>
    );
};

export default Main;