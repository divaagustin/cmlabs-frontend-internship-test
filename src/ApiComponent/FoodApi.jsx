import React, { useEffect, useState } from "react";
import axios from "axios";
import Foods from "../MainComponent/Foods";

// percobaan API dengan menggunakan method Then.
const FoodApi = () => {
  const [hasil, setHasil] = useState([]);
  const gethasil = () => {
    axios.get("categories.php").then((d) => setHasil(d.data.categories));
  };
  useEffect(() => {
    gethasil();
  }, []);
  return (
    <>
      {hasil.map((v, i) => (
        <Foods
          key={i}
          judul={v.strCategory}
          gambar={v.strCategoryThumb}
          kalimat={v.strCategoryDescription}
          id={v.idCategory}
          href={v.strCategory}
        />
      ))}
    </>
  );
};
export default FoodApi;
