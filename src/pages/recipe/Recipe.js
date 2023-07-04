import React from 'react';

const Recipe = ({ recipe }) => {
    const { food_img, recipe_name, ingredients, cooking_method, rating } = recipe;
    return (
        <div>

            <div class="col h-100">
                <div class="card h-100">
                    <img src={food_img} class="card-img-top p-2 rounded recipe-img" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title fw-bold text-center text-success">{recipe_name}</h4>
                        <h6 className='text-danger fw-bold mt-5'>Ingredients:</h6>
                        {
                            ingredients.map((ingredient) => (
                            <li>{ingredient}</li>
                        ))}
                        <h6 className='text-danger fw-bold mt-5'>Cooking Method:</h6>
                        <p class="card-text">{cooking_method}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipe;