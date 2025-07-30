import Navigation from "../../../components/Navigation.tsx";
import ProductDetails from "../../../components/ProductDetails.tsx";

const Page = ({ params } : { params: { id: string } }) => {
  const { id } = params;
  if (!id) return <div className="text-center py-20">Invalid product ID.</div>;
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <ProductDetails id={id} />
    </div>
  );
};

export default Page;