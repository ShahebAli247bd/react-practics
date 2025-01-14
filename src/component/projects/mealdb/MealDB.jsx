import React, { useEffect, useState } from "react";

import axios from "axios";

const MealDB = () => {
    const [data, setData] = useState();
    useEffect(() => {
          axios
              .get(
                  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
              )
              .then(
                  (res) => 
                  setData(res.data.meals)
              );
    }, []);
 
      return (
            <section className="pb-10">
                  <h2 className="text-2xl p-4 text-gray-600 border-b pb-6 mb-6  bg-gray-50/80 backdrop:blur-sm z-10 w-full">SeaFood from MealDB</h2>
              <div className="p-4 container grid grid-cols-1 justify-center items-start mx-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {data &&
                      data?.map((meal) => (
                          <div>
                              <div className="relative top-0 align-top">
                                  <span className="absolute bottom-2 right bg-gray-200 p-2 right-0">
                                      {meal.idMeal}
                                  </span>
                                  <img
                                      src={meal.strMealThumb}
                                      width={250}
                                      className="mx-auto w-full object-cover"
                                  />
                              </div>
                              <div className="text-2xl md:text-xl font-bold text-gray-600">
                                  {meal.strMeal}
                              </div>
                          </div>
                      ))}
              </div>
          </section>
      );
};

export default MealDB;
