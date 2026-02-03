"use client"

import { useState } from "react"

type Product = {
  id: number
  name: string
  price: number
  category: "electronics" | "clothing"
}

export default function Home() {
  const [category, setCategory] = useState("all")
  const [sortOption, setSortOption] = useState("default")

  // 💰 Lower prices added
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 12000, category: "electronics" },
    { id: 2, name: "Headphones", price: 1000, category: "electronics" },
    { id: 3, name: "T-Shirt", price: 299, category: "clothing" },
    { id: 4, name: "Jacket", price: 1999, category: "clothing" },
  ]

  let filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category)

  if (sortOption === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    )
  } else if (sortOption === "high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
          🛍 Dynamic Product Store
        </h1>

        {/* Dropdowns */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 rounded-lg border border-indigo-400 bg-indigo-50 text-indigo-700 font-semibold"
          >
            <option value="all">All Products</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </select>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-3 rounded-lg border border-pink-400 bg-pink-50 text-pink-700 font-semibold"
          >
            <option value="default">Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {product.name}
              </h2>

              <p className="text-xl font-bold mb-3 text-green-600">
                ₹{product.price.toFixed(2)}
              </p>

              <span
                className={`px-4 py-1 text-sm rounded-full font-semibold ${
                  product.category === "electronics"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {product.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
