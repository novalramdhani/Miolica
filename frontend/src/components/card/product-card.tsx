/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import { ExampleProductImage } from 'assets';

interface ProductCardType {
  isResponsive?: boolean;
}

export default function ProductCard({
  isResponsive = false,
}: ProductCardType) {
  if (isResponsive) {
    return (
      <Link to="/product/asdasd123" className="p-4 block w-[250px]">
        <div className="flex items-center justify-center relative overflow-hidden max-h-[350px]">
          <img src={ExampleProductImage} alt="Product" className="w-full h-full" />
        </div>
        <div id="product-card-description" className="py-2">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to="/product/asdasd123asd" className="p-4 min-w-[250px]" id="product-card">
      <div className="flex items-center justify-center relative overflow-hidden max-h-[350px] max-w-[250px]">
        <img src={ExampleProductImage} alt="Product" className="w-full h-full" />
      </div>
      <div id="product-card-description" className="py-2 max-w-250">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, veritatis corrupti similique natus sit tempore!</p>
      </div>
    </Link>
  );
}
