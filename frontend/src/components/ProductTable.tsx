"use client";
import { useState, useEffect } from "react";
import { Card, DataTable, TextField } from "@shopify/polaris";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  commissionPercent?: number;
}

export const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from your API
    fetch("/api/products")
      .then((response) => response.json())
      .then(setProducts);
  }, []);

  const handleCommissionChange = (value: string, id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, commissionPercent: Number(value) }
          : product
      )
    );
  };

  return (
    <Card>
      <DataTable
        columnContentTypes={["text", "text", "numeric", "numeric"]}
        headings={["Product Name", "Category", "Price", "Commission Percent"]}
        rows={products.map((product) => [
          product.name,
          product.category,
          product.price,
          <TextField
            label={`Commission for ${product.name}`} // Required label prop
            key={product.id}
            value={product.commissionPercent?.toString() || ""}
            onChange={(value) => handleCommissionChange(value, product.id)}
            type="number"
            autoComplete="off"
          />,
        ])}
      />
    </Card>
  );
};
