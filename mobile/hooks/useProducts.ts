import { useApi } from "@/lib/api";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const api = useApi();

  const result = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      console.log("Fetching products...");
      try {
        const { data } = await api.get<Product[]>("/products");
        console.log("Products fetched:", data);
        return data;
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    },
  });

  return result;
};

export default useProducts;
