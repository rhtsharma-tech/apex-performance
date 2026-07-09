import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionTracker from "@/components/layout/SectionTracker";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import SpecsTable from "@/components/product/SpecsTable";
import PerformanceMetrics from "@/components/product/PerformanceMetrics";
import FitmentChecker from "@/components/product/FitmentChecker";
import RelatedProducts from "@/components/product/RelatedProducts";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: product.category.name, href: `/shop?category=${product.category.slug}` },
    { label: product.name },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SectionTracker section="shop" />
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} thumbnail={product.thumbnail} />
        </div>
        <div className="lg:col-span-5">
          <ProductInfo product={product} />
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2 border-b border-white/10 overflow-x-auto no-scrollbar">
            {["Technical Specifications", "Vehicle Fitment", "Installation Guide", "Customer Reviews"].map(
              (tab, i) => (
                <button
                  key={tab}
                  className={`font-mono text-xs uppercase tracking-widest px-4 py-3 whitespace-nowrap transition-colors ${
                    i === 0
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-muted hover:text-on-surface"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
          <div className="flex-1 h-px bg-white/10 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            {product.specs && <SpecsTable specs={product.specs} />}
          </div>
          <div className="lg:col-span-5">
            {product.metrics && product.metrics.length > 0 && (
              <PerformanceMetrics metrics={product.metrics} />
            )}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <FitmentChecker />
      </div>

      <div className="mt-16">
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
}
