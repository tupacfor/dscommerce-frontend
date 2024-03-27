import { useEffect, useState } from "react";
import ButtonNextPage from "../../../components/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard";
import SearchBar from "../../../components/SearchBar";
import * as productService from "../../../services/product-service";
import "./styles.css";

import { Outlet } from "react-router-dom";
import { ProductDTO } from "../../../models/Product";
import axios from "axios";

export default function Catalog() {
  
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    productService.findAll()
    .then(response => setProducts(response.data.content));
  }, [])

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
        <ButtonNextPage />
      </section>
      <Outlet />
    </main>
  );
}