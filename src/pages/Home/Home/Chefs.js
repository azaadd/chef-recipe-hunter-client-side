import React, { useEffect, useState } from 'react';
import Chef from './Chef';


const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <div className='container mt-5'>
            <div className='pt-5 pb-4'>
                <h2 className='fw-bold text-center text-success'>Our <span className='text-danger'>Magician</span> Chefs</h2>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>


        </div>
    );
};

export default Chefs;