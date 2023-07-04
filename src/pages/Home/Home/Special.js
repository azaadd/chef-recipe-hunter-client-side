import React from 'react';
import img_shingara from '../../../assets/shingara.jpg';
import img_kabab from '../../../assets/kabab.JPG';
import img_mughlai from '../../../assets/Mughlai-Paratha1.jpg';
import img_chicken_roll from '../../../assets/Chicken-Roll.jpg';

const Special = () => {
    return (
        <div className='mt-5'>
            <h2 className='fw-bold text-success text-center'><span>Our</span><span className='text-danger'> Special</span><span> Dishes</span></h2>

            <div className="row row-cols-1 row-cols-md-4 g-3 mt-3">
                <div className="col">
                    <div className="card h-100">
                        <img src={img_shingara} className="card-img-top special-img" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Singara</h5>
                                <p className="card-text">When travels to the land of Bengal, takes the form of a Shingara. But try saying that to a Bengali, they may take offense in it. Of course, some similarities between the two do exist, but for a Bengali person, a Singara is another emotion in itself.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img_kabab} className="card-img-top special-img" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Kabab</h5>
                                <p className="card-text">Kabab is a very popular evening snack in Bangladesh. Kabab is a tempting food in Bangladesh. It is made with cubic pieces of beef or mutton. The cuisine is prepared with meat, and it is marinated the spices. Later it is put together with for melting in a Prod or Skewer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img_mughlai} className="card-img-top special-img" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Moglai poroṭa</h5>
                                <p className="card-text">Moglai pôroṭa is a popular Bengali street food consisting of a flatbread wrapped around or stuffed with keema and or egg. It is believed to have originated in Bengal Subah during the time of Mughal Empire as a derivative of the Turkish Gozleme. The dish is believed to be prepared for the royal court of Mughal Emperor</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img_chicken_roll} className="card-img-top special-img" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Chicken Roll</h5>
                                <p className="card-text">Chicken Roll is a popular street food in Bangladesh which made using all purpose flour, stir-fried chicken, yoghurt and a variety of vegetables rolled into add the chicken pieces along with mustard oil, tandoori masala, haldi, red chilli powder, and salt. Mix well and coat the chicken nicely. </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Special;