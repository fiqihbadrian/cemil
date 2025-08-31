import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    link: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card w-56 bg-white text-black shadow-md rounded-3xl">
      <figure className="px-6 pt-6">
        <div
          className="w-40 h-40 flex items-center justify-center overflow-hidden rounded-2xl border-8 border-[#8c6a4f]">
          <Image
            src={product.image}
            alt={product.name}
            width={160} // Dimensi sesuai w-40, h-40 (160px)
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      </figure>
      <div className="card-body text-center">
        <h2 className="text-lg font-medium">{product.name}</h2>
        <Link
          href={product.link}
          className="btn bg-transparent hover:bg-[#6b4e36] hover:text-white rounded-full px-8 py-2">
          Lihat
        </Link>
      </div>
    </div>
  );
}
