import React from 'react';
import '../../shared/Header/Header.css';


const Chef = ({chef}) => {

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
                                <img className="card-img-top card-pic" src={chef_picture} alt="..."/>
                            </div>
                            <div className="card-body ms-3 pb-4">
                                <h5 className="card-title fw-bold">{chef_name}</h5>
                                <p className="card-text">{years_of_experience} year experience</p>
                                <p className="card-text">Total Recipes: {number_of_recipes}</p>
                                <p className="card-text">Total Likes: {likes}</p>
                                <button className='apply'>View Recipes</button>
                            </div>
                    </div>
                </div>
        </div>
    );
};

export default Chef;