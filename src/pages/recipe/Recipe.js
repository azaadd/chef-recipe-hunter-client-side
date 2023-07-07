import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false);
    const { food_img, recipe_name, ingredients, cooking_method, rating } = recipe;

    const notify = () => {
        const toastMessage = toast.success("Successfully added!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: false,
        });
        if (toastMessage) {
            return setFavorite(true);
        }
    }


    return (
        <div>

            <div className="col h-100">
                <div className="card h-100">
                    <img src={food_img} className="card-img-top p-2 rounded recipe-img" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title fw-bold text-center text-success">{recipe_name}</h4>
                        <h6 className='text-danger fw-bold mt-5'>Ingredients:</h6>
                        {
                            ingredients.map((ingredient) => (
                                <li>{ingredient}</li>
                            ))}
                        <h6 className='text-danger fw-bold mt-5'>Cooking Method:</h6>
                        <p className="card-text mb-5">{cooking_method}</p>



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
                                <button
                                    onClick={notify}
                                    disabled={favorite}
                                    className='btn btn-danger ms-5'>Favorite</button>
                                <ToastContainer />
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipe;