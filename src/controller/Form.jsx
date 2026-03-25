import React, { useState } from "react";
import { productSchema } from "../model/schema";

const Form = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const [errors, setErrors] = useState({});

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const { error } = productSchema.validate(form, {
      abortEarly: false,
    });

    if (error) {
      const errObj = {};
      error.details.forEach((err) => {
        errObj[err.path[0]] = err.message;
      });
      setErrors(errObj);
    } else {
      alert("Form Submitted ✅");
      console.log(form);
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center text-blue-600">
          Add Product
        </h2>

        {/* TITLE */}
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <p className="text-red-500 text-sm">{errors.title}</p>

        {/* PRICE */}
        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <p className="text-red-500 text-sm">{errors.price}</p>

        {/* DESCRIPTION */}
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <p className="text-red-500 text-sm">{errors.description}</p>

        {/* CATEGORY */}
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <p className="text-red-500 text-sm">{errors.category}</p>

        {/* BUTTON */}
        <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;