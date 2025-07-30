"use client";

import React, {useEffect, useState} from "react";
import {Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription} from "./ui/card";

interface Product {
    id: number;
    documentId: string;
    name: string;
    description: string;
    image: string;
    price: number;
}

const STRAPI_URL = process?.env?.NEXT_PUBLIC_STRAPI_URL;

const StoreSection: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`${STRAPI_URL}?populate=image`)
            .then((res) => res.json())
            .then((data) => {
                const products = data.data.map((item: any) => ({
                    id: item.id,
                    documentId: item.documentId,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    image: item.image?.url
                        ? `http://localhost:1337${item.image.url}`
                        : "https://placehold.co/500x300", // fallback image
                }));

                setProducts(products);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load products.");
                setLoading(false);
            });
    }, []);


    if (loading) return <div className="text-center py-20">Loading products...</div>;
    if (error) return <div className="text-center text-red-500 py-20">{error}</div>;

    return (
        <section className="py-20 bg-slate-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Security Tools You Can Trust</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
                    {products.map((product) => (
                        <Card key={product.id} className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <img src={product.image} alt={product.name}
                                     className="w-full h-48 object-cover rounded-t-xl"/>
                                <CardTitle className="mt-4 text-2xl text-cyan-300">{product.name}</CardTitle>
                                <CardDescription className="text-slate-400">{product.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-lg font-semibold text-emerald-400">${product.price}</div>
                            </CardContent>
                            <CardFooter>
                                <a href={`/store/${product.documentId}`}
                                   className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">View
                                    Details</a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                {products && products.length === 0 && (
                    <div className="text-center text-gray-400 py-20">No Products</div>
                )}
            </div>
        </section>
    );
};

export default StoreSection;