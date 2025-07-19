import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from '../../components/FoodCard';
import Loading from '../../components/Loading';
import { Link } from 'react-router';


const FeaturedFoods = () => {
    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      axios.get('http://localhost:5000/foods?available=true')

            .then(res => {
                setLoading(false)
                setFoods(res.data)
            })

          .catch(err => {
  console.error(err);
  setLoading(false); 
});
    }, [])

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className='text-5xl font-bold mt-22 text-blue-900'>All Available Food</h1>
            </div>
            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {foods.slice(0,6).map(food => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
                <div className='text-center mt-16 '>
                    <Link to='/availableFoods' className=' text-lg btn bg-blue-600 text-white hover:bg-gray-200 hover:text-blue-700 w-1/4 text-center '>View All</Link>
                </div>


        </div>
    );
};

export default FeaturedFoods;