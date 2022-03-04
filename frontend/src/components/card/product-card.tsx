/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import { IconLove } from 'assets';

interface ProductCardType {
  isResponsive?: boolean;
  isSkeleton?: boolean;
  productName?: string;
  productPrice?: string | number;
  productImage?: any;
}

export default function ProductCard({
  // eslint-disable-next-line no-unused-vars
  isResponsive = false,
  isSkeleton = false,
  productName = '',
  productPrice = '',
  productImage = '',
}: ProductCardType) {
  // Skeleton for product card
  if (isSkeleton) {
    return (
      <div className="p-4 min-w-[250px]">
        <div className="flex items-center justify-center relative overflow-hidden h-[350px] max-w-[250px] bg-custom-white-600 animate-pulse" />
        <div id="product-card-detail" className="py-6 max-w-250 flex items-center justify-between gap-4 flex-row">
          <div className="w-full h-auto">
            <div className="font-semibold text-base line-clamp-1 bg-custom-white-600 animate-pulse block w-full h-5 mb-2" />
            <span className="line-clamp-1 text-xs w-[80%] bg-custom-white-600 animate-pulse h-3 block" />
          </div>
          <div className="btn-default h-[2.5rem] w-[2rem] bg-custom-white-600 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 min-w-[250px]">
      <Link to="/product/asdasd123asd" id="product-card" className="group flex items-center justify-center relative overflow-hidden max-h-[350px] max-w-[250px]">
        <img data-src={productImage} alt={`Product${' '}Image`} className="w-full h-[350px] object-cover lazyload group-hover:scale-105 group-hover:brightness-90 transition-all duration-200" />
      </Link>
      <div id="product-card-detail" className="py-6 max-w-250 flex items-center justify-between gap-4 flex-row">
        <Link to="/product/asdasd123asd" id="product-card">
          <h3 className="font-semibold text-base line-clamp-1 text-custom-black-900">{productName}</h3>
          <span className="line-clamp-1 text-xs">
            $
            {' '}
            {productPrice}
          </span>
        </Link>
        <button
          className="btn-default border-0 hover:text-custom-black-900 tooltip group"
          type="button"
        >
          <IconLove className="w-6 h-6 " />

          <p className="tooltip-text-center group-hover:-bottom-[30px]">
            Like this product
          </p>
        </button>
      </div>
    </div>
  );
}
