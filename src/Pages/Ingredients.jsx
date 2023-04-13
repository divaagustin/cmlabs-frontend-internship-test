import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Ingredients() {
  const { mealId } = useParams();
  const [komposisi, setKomposisi] = useState(null);

  const getIngredients = async () => {
    const res = await axios.get("lookup.php", {
      params: { i: mealId },
    });
    setKomposisi(res.data.meals?.at(0));
    console.log(res.data.meals?.at(0));
  };
  useEffect(() => {
    getIngredients();
  }, []);
  return (
    <div className="container py-2">
      <p className="text-3xl pb-4 font-semibold pl-4">{komposisi?.strMeal}</p>
      <div className="grid md:flex py-2">
        <img
          src={komposisi?.strMealThumb}
          className="rounded-lg flex w-full h-2/3"
          alt={komposisi?.strMeal}
        />
        <p className="text-3xl font-semibold pl-2">
          <h1>Instructions </h1>
          <h2 className="text-xl py-6 font-normal">
            {komposisi?.strInstructions}
          </h2>
          <h3>Recipes</h3>
          <h4 className="text-xl font-normal pl-6 py-2">
            <ul className="list-disc">
              {komposisi &&
                (() => {
                  const item = [];
                  for (let i = 0; i < 19; i++) {
                    item.push(komposisi[`strIngredient${i + 1}`]);
                  }
                  return item.map((e, i) => {
                    return (
                      item[i].length > 1 && (
                        <li key={`ingredient_item_${i}`}>{e}</li>
                      )
                    );
                  });
                })()}
            </ul>
          </h4>
        </p>
      </div>
      <div className="grid ">
        <h1 className="mx-auto py-12  text-3xl font-semibold underline">
          Tutorials
        </h1>
        <h2 className="mx-auto w-full md:w-1/2 h-64 pb-2">
          {komposisi && (
            <>
              <iframe
                width="100%"
                height="150%"
                src={`https://www.youtube.com/embed/${
                  String(komposisi.strYoutube).split("v=")[1]
                }`}
                title="YouTube video player"
              ></iframe>
            </>
          )}
        </h2>
      </div>
    </div>
  );
}

export default Ingredients;
