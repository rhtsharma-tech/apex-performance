"use client";

import { useState, useMemo, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FilterState } from "@/types";
import { products } from "@/lib/data";
import { useNav } from "@/lib/nav-context";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ProductGrid from "@/components/shop/ProductGrid";
import Breadcrumb from "@/components/layout/Breadcrumb";

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const { setLastSection } = useNav();

  useEffect(() => {
    setLastSection("shop");
  }, [setLastSection]);

  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    priceRange: [0, 0],
    systems: categoryParam ? [categoryParam] : [],
    search: "",
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        filters.systems.length > 0 &&
        !filters.systems.some(
          (s) => s.toLowerCase() === product.category.name.toLowerCase().split(" ")[0]
        )
      ) {
        return false;
      }

      if (
        filters.brands.length > 0 &&
        !filters.brands.some((b) =>
          product.name.toLowerCase().includes(b.toLowerCase())
        )
      ) {
        return false;
      }

      if (
        filters.priceRange[0] > 0 &&
        product.price < filters.priceRange[0]
      ) {
        return false;
      }

      if (
        filters.priceRange[1] > 0 &&
        product.price > filters.priceRange[1]
      ) {
        return false;
      }

      if (
        filters.search &&
        !product.name.toLowerCase().includes(filters.search.toLowerCase()) &&
        !product.description.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop" },
  ];

  if (categoryParam) {
    const cat = products.find(
      (p) => p.category.slug === categoryParam
    )?.category;
    if (cat) {
      breadcrumbItems.splice(1, 0, { label: "Shop", href: "/shop" });
      breadcrumbItems.splice(2, 0, { label: cat.name });
    }
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl sm:text-4xl uppercase text-on-surface">
          Performance Catalog
        </h1>
        <p className="font-mono text-xs text-on-surface-muted mt-2 uppercase tracking-wider">
          {filteredProducts.length} products found
        </p>
      </div>

      <div className="flex gap-8">
        <FilterSidebar filters={filters} onFilterChange={setFilters} />

        <div className="flex-1 min-w-0">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </>
  );
}

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-32">
            <span className="font-mono text-xs uppercase tracking-widest text-on-surface-muted animate-pulse">
              Loading catalog...
            </span>
          </div>
        }
      >
        <ShopContent />
      </Suspense>
    </div>
  );
}
