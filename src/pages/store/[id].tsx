import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
import ProductDetails from "../../components/ProductDetails";

const ProductIdPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div className="text-center py-20">Invalid product ID.</div>;
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <ProductDetails id={id} />
    </div>
  );
};

export default ProductIdPage;