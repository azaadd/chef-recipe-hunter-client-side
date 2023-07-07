import React from 'react';
import '../../shared/Header/Header.css';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const Chef = ({ chef }) => {

    const {
        id,
        chef_picture,
        chef_name,
        years_of_experience,
        number_of_recipes,
        likes
    }
        = chef


    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <div className='p-3'>
                        <LazyLoad height={218} width={327} threshold={0.95} onContentVisible={() => { console.log('loaded!') }}>
                            <img className="card-img-top card-pic" src={chef_picture} alt="..." />
                        </LazyLoad>



                    </div>
                    <div className="card-body ms-3 pb-4">
                        <h5 className="card-title fw-bold">{chef_name}</h5>
                        <p className="card-text">{years_of_experience} year experience</p>
                        <p className="card-text">Total Recipes: {number_of_recipes}</p>
                        <p className="card-text">Total Likes: {likes}</p>
                        <Link to={`/recipes/${id}`}><button className='apply'>View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;