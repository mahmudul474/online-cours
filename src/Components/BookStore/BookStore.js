import React from "react";
import book from "../../assats/book-store.png";

const BookStore = () => {
  return (
    <div className="mb-10">
      {/* headline */}
      <div className="mt-10 lg:mt-16">
        <h1 className="w-full text-3xl lg:text-5xl font-bold text-center mb-10 lg:mb-16">
          Book Store
        </h1>
      </div>

      {/* book image */}

      <div className="flex justify-center ">
        <div>
          <img src={book} alt="" className="" />

          <p className="text-center text-2xl font-semibold mt-3">Omar's Basic Math</p>
          <p className="text-center text-xl font-semibold mt-1">Taka 500</p>
        </div>
      </div>
    </div>
  );
};

export default BookStore;
