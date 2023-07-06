import { Link, useRouteError } from "react-router-dom";
import errorgift from '../assets/404-error-page-3959253-3299952.gif';

export default function ErrorPage() {
    const error = useRouteError();
    //console.error(error);
    return (
        <div className='container'>
            <div id="error-page" className="align-items-center m-5">
                <div className="d-flex justify-content-center align-items-center">
                    <img className="rounded-circle" src={errorgift} alt="" />
                    <div className="ms-3">
                        <h2 className="fw-bold">Page Not Found</h2>
                        <button className="btn btn-danger ms-5">
                        <a>
                            

                            <span>
                                <Link className="text-white text-decoration-none" to="/">Go Home</Link>
                            </span>
                        </a>
                    </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};