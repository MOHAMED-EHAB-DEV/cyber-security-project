import React from "react";
import Navigation from "../../components/Navigation.tsx";
import StoreSection from "../../components/StoreSection.tsx";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <StoreSection />
    </div>
  );
};

export default Page;