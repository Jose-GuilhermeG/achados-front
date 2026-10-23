import { useState, useEffect } from "react";
import { getCategories } from "@services/itemServices";
import useError from "@hooks/useError";

export function useGetCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { reportError } = useError();

  
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        reportError("Não foi possível carregar as categorias do sistema.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, [reportError]);

  return { categories, loading };
}