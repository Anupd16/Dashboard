import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.png";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";

const PopularProductsData = [
  {
    id: "3432",
    product_name: "macbook N1 pro 14",
    product_thumbnail: img1,
    product_price: "$399.00",
    product_stock: 341,
  },
  {
    id: "7633",
    product_name: "Samsung Galaxy bus 2",
    product_thumbnail: img2,
    product_price: "$399.00",
    product_stock: 24,
  },
  {
    id: "4563",
    product_name: "Asus Zenbook pro",
    product_thumbnail: img3,
    product_price: "$899.00",
    product_stock: 56,
  },
  {
    id: "6534",
    product_name: "LG flex canvas",
    product_thumbnail: img4,
    product_price: "$399.00",
    product_stock: 58,
  },
  {
    id: "9234",
    product_name: " Apple Magic Touchpad ",
    product_thumbnail: img5,
    product_price: "$399.00",
    product_stock: 8,
  },
  {
    id: "4342",
    product_name: "Nothing Earbuds one",
    product_thumbnail: img6,
    product_price: "$399.00",
    product_stock: 453,
  },
];

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseFloat(price.replace("$", "")));
};

const getStockStatusClass = (stock) => {
  if (stock === 0) return "text-red-500"; // out of stock
  if (stock > 50) return "text-green-500"; // more than 50 in stock
  return "text-orange-500"; // between 1 and 50 in stock
};

const PopularProducts = () => {
  return (
    <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
      <strong className="text-gray-700 font-medium">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3">
        {PopularProductsData.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex items-start hover:no-underline"
          >
            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={product.product_thumbnail}
                alt={product.product_name} // Remove unnecessary terms like "Image of"
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.product_name}</p>
              <span
                className={classNames(
                  getStockStatusClass(product.product_stock),
                  "text-xs font-medium"
                )}
              >
                {product.product_stock === 0
                  ? "Out of Stock"
                  : product.product_stock + " in Stock"}
              </span>
            </div>
            <div className="text-xs text-gray-400 pl-1.5">
              {formatPrice(product.product_price)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
