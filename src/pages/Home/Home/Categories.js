import React from 'react';
import img_fish from '../../../assets/fish.jpg';
import img_beef from '../../../assets/beef.jpg';
import img_biriany from '../../../assets/biriany.jpg';
import img_chicken from '../../../assets/chicken.jpg';
import img_vagitable from '../../../assets/vagitable.JPG';

const Categories = () => {
    return (
        <div className='mt-5'>
            <h2 className='fw-bold text-danger text-center pt-5'><span className='text-success'>Recipe</span> <span>Categories</span></h2>
            <div className="row row-cols-2 row-cols-md-5 g-4 mt-1">
                <div className="col">
                    <div className="card h-100 text-center border-0">
                        <img src={img_vagitable} className="card-img-top category-img p-2" alt=".."/>
                            <div className="card-body">
                                <h4 className="card-title fw-semibold">vegetable</h4>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center border-0">
                        <img src={img_beef} className="card-img-top category-img p-2" alt=".."/>
                            <div className="card-body">
                                <h4 className="card-title fw-semibold">Beef</h4>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center border-0">
                        <img src={img_biriany} className="card-img-top category-img p-2" alt=".."/>
                            <div className="card-body">
                                <h4 className="card-title fw-semibold">Biryani</h4>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center border-0">
                        <img src={img_chicken} className="card-img-top category-img p-2" alt=".."/>
                            <div className="card-body">
                                <h4 className="card-title fw-semibold">Chicken</h4>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center border-0">
                        <img src={img_fish} className="card-img-top category-img p-2" alt=".."/>
                            <div className="card-body">
                                <h4 className="card-title fw-semibold">Fish</h4>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;