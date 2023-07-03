import React from 'react';
import banner from '../../../assets/Begun fry vaji.png';
import  '../../shared/Header/Header.css'
import Chefs from './Chefs';

const Banners = () => {
    return (
        <div className='container mt-5'>
            <div className='d-flex align-items-center'>
                <div>
                    <h2 className='fw-bold fs-1 mb-4 text-success'>Bangladeshi <span className='text-danger'>cuisine is a</span> culinary art-form</h2>
                    <p className='fs-5'>A taste tantalizing blend of wonderful and fragrant spices that will keep you coming back for more. Bangladeshi culinary habits were strongly influenced by the cuisine of the area's Mughal rulers. This includes rich, aromatic dishes such as biriyani and korma that require the use of a large array of spices along with a great deal of ghee.</p>
                    <button type="button" className="apply mt-3">Order Now</button>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </div>
            <Chefs></Chefs>
        </div>
    );
};

export default Banners;