import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import FoodCard from '../../components/FoodCard';
import Loading from '../../components/Loading';
import { AuthContext } from '../../Context/AuthContext';

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  // const {user}=use(AuthContext)
  const {user} = useContext(AuthContext)
  console.log(user);
console.log(user?.accessToken);

  // console.log(user.accessToken);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/foods?sort=${sortOrder}`,{
        headers:{
                authorization: `Bearer ${user?.accessToken}`,
            }
      })
      .then(res => {
        setFoods(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [sortOrder]);

  if (loading) return <Loading />;

  return (
    <div className="p-4">
      {/* Sort Dropdown */}
      <div className="mb-6 mt-4 flex justify-end">
        <select
          className="select select-bordered"
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort by Expire Date ↑</option>
          <option value="desc">Sort by Expire Date ↓</option>
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map(food => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
