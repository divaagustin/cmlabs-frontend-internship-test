import React from "react";
import { Link } from "react-router-dom";
export function Foods({ judul, gambar, kalimat, id, href }) {
  return (
    <>
      <Link
        to={`/Meals/${href}`}
        className="flex justify-center rounded-lg p-2 md:"
      >
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src={gambar} alt="Shoes" />
          </figure>
          <div className="card-body ite">
            <div className="card-actions justify-center pt-16">
              <button className="text-xl">{judul}</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Foods;
