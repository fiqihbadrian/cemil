// src/app/produk/[slug]/page.tsx

import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allProducts } from "@/app/data/allProducts";
import type { Product } from "@/app/data/types";
import WhatsAppButton from "@/app/components/WhatsAppButton";

function extractSlug(product: Product): string {
  if (product.slug) return product.slug;
  if (product.link) {
    const parts = product.link.split("/").filter(Boolean);
    return parts[parts.length - 1];
  }
  return "";
}

function findProductBySlug(slug: string): Product | undefined {
  const target = slug.toLowerCase();
  return allProducts.find((p) => {
    const direct = p.slug?.toLowerCase();
    if (direct === target) return true;
    if (p.link) {
      const linkParts = p.link.split("/").filter(Boolean);
      const linkSlug = linkParts[linkParts.length - 1]?.toLowerCase();
      if (linkSlug === target) return true;
    }
    return false;
  });
}

export function generateStaticParams() {
  return allProducts
    .map((product) => extractSlug(product))
    .filter(Boolean)
    .map((slug) => ({ slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="pt-16">
    <div className="bg-[#fff6e9] min-h-screen p-6 lg:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Image 
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full" 
            />
          </div>
          <div className="flex flex-col justify-start text-black">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-[#333] mb-6">Rp{product.price}</p>
            <label className="block mb-2 font-medium">Pilih Kemasan:</label>
            <select id="kemasan" className="border rounded-lg p-2 mb-4 w-full">
              <option value="100 gram">100 gram</option>
              <option value="200 gram">200 gram</option>
            </select>
            <label className="block mb-2 font-medium">Jumlah:</label>
            <input id="jumlah" type="number" defaultValue="1" min="1" className="border rounded-lg p-2 mb-6 w-full"/>
            <div className="flex gap-4">
              <WhatsAppButton productName={product.name} />
              <a href="#" className="flex-1 text-center py-3 bg-[#00AA5B] text-white rounded-lg hover:bg-[#009452]">
                Beli via Tokopedia
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          <div className="bg-[#f9e2cc] text-black p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Detail Produk</h2>
            <ul className="list-disc pl-5 text-sm leading-relaxed">
              {product.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#f9e2cc] text-black p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Informasi Tambahan</h2>
            <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: product.info }} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
