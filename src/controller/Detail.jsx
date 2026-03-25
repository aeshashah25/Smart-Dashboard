import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../model/api";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };

    fetchData();
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <img src={product.image} className="h-60 mx-auto" />
      <h1 className="text-xl font-bold mt-4">{product.title}</h1>
      <p className="text-green-600">${product.price}</p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
};

export default Detail;