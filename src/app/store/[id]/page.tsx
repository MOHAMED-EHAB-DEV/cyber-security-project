import Navigation from "../../../components/Navigation";
import ProductDetails from "../../../components/ProductDetails";

interface PageProps {
    params: {
        id: string;
    };
}

const Page = async ({ params }: PageProps) => {
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
