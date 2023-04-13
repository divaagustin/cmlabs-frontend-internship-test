import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function FoodsDetails() {
  const params = useParams();
  const [foodsDetails, setFoodDetails] = useState(null);
  const fetchCategory = async (token) => {
    try {
      const res = await axios.get("filter.php", {
        cancelToken: token,
        params: {
          c: params.foodId,
        },
      });
      setFoodDetails(res.data.meals);
      console.log(res);
    } catch (error) {
      if (axios.isCancel(error)) return false;
      console.log(error);
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    fetchCategory();
    return () => source.cancel();
  }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 container">
      {foodsDetails?.map(({ strMeal, idMeal, strMealThumb, meals }) => (
        <Link
          to={`${idMeal}`}
          key={idMeal}
          className="flex justify-center rounded-lg p-2 md:"
        >
          <div key={idMeal} className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img src={strMealThumb} alt="foods" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-center pt-32">
                <button className="text-xl">{strMeal}</button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FoodsDetails;
