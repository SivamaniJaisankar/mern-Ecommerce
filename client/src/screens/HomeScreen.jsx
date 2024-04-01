import React from "react";
import Product from "../components/Product";
import { useGetProductsQuery } from "../app/slices/productApiSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";

export default function HomeScreen() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : error ? (
        toast.error(error?.data?.message)
      ) : (
        <div className="border border-red=500 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
