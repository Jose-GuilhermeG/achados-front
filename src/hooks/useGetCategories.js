import { useState, useEffect, useCallback } from "react";
import { getCategories } from "@services/itemServices";
import useError from "@hooks/useError";

export function useGetCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { reportError } = useError();

  const fetchCategories = useCallback(async () => {
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
  }, [reportError]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { categories, loading, refetch: fetchCategories };
}