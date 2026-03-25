import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/detail/${product.id}`)}
      className="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer overflow-hidden"
    >
      <div className="h-48 flex items-center justify-center bg-gray-100">
        <img src={product.image} className="h-36 object-contain" />
      </div>

      <div className="p-4">
        <h2 className="text-sm font-semibold line-clamp-2">
          {product.title}
        </h2>

        <p className="text-blue-600 font-bold mt-2">${product.price}</p>

        <button className="mt-3 w-full bg-blue-600 text-white py-1 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;