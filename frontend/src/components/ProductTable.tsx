"use client";
import { useState, useEffect } from "react";
import { Card, DataTable, TextField } from "@shopify/polaris";

interface Product {
  id: number | string;
  name: string;
  category: string;
  price: number;
  commissionPercent?: number;
}

export const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('http://localhost:3001/api/products'); 
      const data = await res.json();
      setProducts(data);
    }
  
    fetchProducts();
  }, []);
  


  const handleCommissionChange = (value: string, id: number | string) => {
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
            label={`Commission for ${product.name}`} 
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
