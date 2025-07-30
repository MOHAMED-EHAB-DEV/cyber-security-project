import React from "react";
import Navigation from "../components/Navigation";
import StoreSection from "../components/StoreSection";

const StorePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <StoreSection />
    </div>
  );
};

export default StorePage;