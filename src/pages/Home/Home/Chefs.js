import React, { useContext, useEffect, useState } from 'react';
import Chef from './Chef';
import Categories from './Categories';
import Special from './Special';
import Footer from '../../shared/Footer/Footer';
import { AuthContext } from '../../../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';


const Chefs = () => {
    const {loading} = useContext(AuthContext);
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
        <div className='mt-5'>
            <div className='pt-5 pb-4'>
                <h2 className='fw-bold text-center text-success'>Our <span className='text-danger'>Magician</span> Chefs</h2>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-3">
                { loading ? <>
                    <div className='container mx-auto w-25'>
                        <Spinner animation="border" variant="secondary" className='my-3 m-5'/>
                    </div></>
                :<>{
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }</>
                }
            </div>

            <Categories></Categories>
            <Special></Special>
        </div>
    );
};

export default Chefs;