import React from 'react';
import { Card } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

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
                        <p class="card-text mb-5">{cooking_method}</p>


                        
                            <div className="text-muted d-flex align-items-center position-absolute mb-3 bottom-0">
                                <div className='flex-grow-1 align-items-center'>
                                    <Rating
                                        placeholderRating={rating}

                                        emptySymbol={<FaRegStar className='fs-4'></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning fs-4'></FaStar>}
                                        fullSymbol={<FaStar className='text-warning fs-4'></FaStar>}
                                    ></Rating>
                                    <span className='fs-5 bg-primary-subtle px-3 rounded-5'>{rating}</span>
                                </div>
                                <div>
                                    <button className='btn btn-danger ms-5'>Favorite</button>
                                </div>
                            </div>
                        


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipe;