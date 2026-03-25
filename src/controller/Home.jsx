import { useEffect, useState } from "react";
import { getProducts, getCategories } from "../model/api";
import ProductCard from "../view/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      const cats = await getCategories();

      setProducts(data);
      setFiltered(data);
      setCategories(cats);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let temp = [...products];

    if (search) {
      temp = temp.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory) {
      temp = temp.filter((p) => p.category === selectedCategory);
    }

    setFiltered(temp);
  }, [search, selectedCategory, products]);

  if (!products.length) {
    return <p className="text-center mt-10">Loading...</p>;
  }

 return (
  <div className="bg-gray-100 min-h-screen py-6">
    <div className="max-w-7xl mx-auto px-4">

      {/* 🔍 Search + Filter */}
      <div className="bg-white p-4 rounded-xl shadow mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded w-full md:w-60"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>
      </div>

      {/* 🛍️ Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  </div>
);
};

export default Home;