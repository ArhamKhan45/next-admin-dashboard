"use client";
import React from "react";

const AddNewProduct = () => {
  const EkeyHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "E" || event.key === "e") {
      event.preventDefault();
    }
  };
  const MaxInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.value.length > 4) {
      event.target.value = event.target.value.slice(0, 4);
    }
  };
  const priceChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {};
  const stockChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    MaxInputHandler(event);
  };
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5 ">
      <input
        type="text"
        name="title"
        id=""
        placeholder="Title"
        className="bg-site-outer p-3 rounded-md"
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Category"
        className="bg-site-outer p-3 rounded-md"
      />
      <input
        type="number"
        name=""
        id=""
        placeholder="$Price"
        onChange={priceChangeHandler}
        className="bg-site-outer p-3 rounded-md"
        onKeyDown={EkeyHandler}
      />
      <input
        type="number"
        name=""
        id=""
        onChange={stockChangeHandler}
        placeholder="Stock"
        max="1000"
        className="bg-site-outer p-3 rounded-md"
        onKeyDown={EkeyHandler}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Color"
        className="bg-site-outer p-3 rounded-md"
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Size"
        className="bg-site-outer p-3 rounded-md"
      />

      <textarea
        name="description"
        placeholder="Description"
        id=""
        className="col-span-full bg-site-outer p-3 rounded-md resize-none h-[210px]"
      />
      <input
        type="submit"
        value="Submit"
        className="bg-site-btn-green col-span-full py-3 rounded-md"
      />
    </form>
  );
};

export default AddNewProduct;
