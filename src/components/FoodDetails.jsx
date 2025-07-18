import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from './Loading';

const FoodDetails = () => {
  const { id } = useParams();
  const [foodData, setFoodData] = useState(null);
    const [loading,setLoading]=useState(true)

  useEffect(() => {
    axios.get(`http://localhost:5000/foods/${id}`)
      .then(res => {
        setLoading(false)
        setFoodData(res.data)
      })
    .catch(err => {
  console.error(err);
  setLoading(false); 
});
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6  shadow-md rounded-lg mt-6 bg-[#EFEFEF]">
      <img src={foodData.foodImage} alt={foodData.foodName} className="w-full h-64 object-cover rounded-md" />
      <h2 className="text-3xl font-bold mt-4">{foodData.foodName}</h2>
      <p className="mt-2"><strong>Quantity:</strong> {foodData.quantity}</p>
      <p><strong>Location:</strong> {foodData.location}</p>
      <p><strong>Expire Date:</strong> {new Date(foodData.expireDate).toLocaleDateString()}</p>
      <p><strong>Status:</strong> {foodData.status}</p>
      <p className="mt-2"><strong>Notes:</strong> {foodData.notes}</p>
      <div className="flex items-center mt-4 gap-4">
        <img src={foodData.donorImage} alt={foodData.donorName} className="w-12 h-12 rounded-full" />
        <div>
          <p className="font-semibold">{foodData.donorName}</p>
          <p className="text-sm text-gray-600">{foodData.donorEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
