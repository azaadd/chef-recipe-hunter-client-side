import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';

const Recipes = () => {
    const recipeData = useLoaderData();

    console.log(recipeData)

    const {
        chef_picture,
        chef_name,
        years_of_experience,
        number_of_recipes,
        likes,
        chef_bio,
        recipes,
    } = recipeData;

    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-2 g-3">
                <div className="col">
                    <div className="card h-100 border-0">
                            <div className="card-body">
                                <h1 className="card-title fw-bold text-primary">{chef_name}</h1>
                                <p className="card-text fs-5 text-secondary">{chef_bio}</p>
                                <h4 className='text-danger fw-bold mb-4 text-center'>Total: <span className='text-success'>{number_of_recipes} Recipes</span></h4>
                                <button className='btn btn-danger opacity-75 p-3 px-5 fs-5 fw-semibold'>{likes} Likes</button>
                                <button className='btn btn-success opacity-75 ms-2 p-3 px-5 fs-5'>{years_of_experience} years of experience</button>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                        <img src={chef_picture} className="card-img-top mt-4" alt="..."/>
                    </div>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-3 g-2 mt-5">
            {
                recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
            }
            </div>
            

        </div>
    );
};

export default Recipes;