'use client';

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "./ui/card";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const Strapi_URL = process?.env?.NEXT_PUBLIC_STRAPI_URL;

const ProductDetails: React.FC<{ id: string }> = ({ id }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${Strapi_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data || null);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load product details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading product...</div>;
  if (error) return <div className="text-center text-red-500 py-20">{error}</div>;
  if (!product) return <div className="text-center py-20">Product not found.</div>;

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="bg-transparent border-none">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6">
            <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
              <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-xl shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-3xl text-cyan-300 mb-2">{product.name}</CardTitle>
                <CardDescription className="text-slate-400 mb-4">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 mb-6">
                <div className="text-2xl font-semibold text-emerald-400">${product.price}</div>
              </CardContent>
              <CardFooter className="p-0">
                <a href="/src/app/store" className="inline-block px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">Back to Store</a>
              </CardFooter>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductDetails;