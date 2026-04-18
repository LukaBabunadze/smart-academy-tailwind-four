"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/carts/1")
      .then((resp) => resp.json())
      .then((res) => setCart(res));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {cart?.products?.map((product) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-2xl gap-4 shadow"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-24 h-24 object-contain rounded-lg"
            />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">
                Quantity: {product.quantity} x ${product.price}
              </p>
              <p>Total: ${product.total.toFixed(2)}</p>
            </div>
          </div>
        ))}
        <div className="font-sans mt-6 bg-white rounded-2xl shadow-2xl text-center sm:text-right p-4">
          <p className="text-gray-700">Items: {cart?.totalProducts}</p>
          <p className="text-gray-700">Total Quantity: {cart?.totalQuantity}</p>
          <p className="text-lg font-bold text-blue-600 mt-2">
            Discounted Total: ${cart?.discountedTotal.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
