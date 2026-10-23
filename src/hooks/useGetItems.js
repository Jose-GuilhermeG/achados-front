import { useState, useEffect, useCallback } from "react";
import { getItems } from "@services/itemServices";
import useError from "@hooks/useError";

export function useGetItems(initialFilters = {}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: initialFilters.status || "",
    categoria: initialFilters.categoria || "",
    local: initialFilters.local || "",
    busca: initialFilters.busca || "",
  });

  const { reportError } = useError();

  useEffect(() => {
      const fetchItems = async (currentFilters) => {
        setLoading(true);
        try {
          const data = await getItems(currentFilters);
          console.log(currentFilters)
          setItems(data);
        } catch (error) {
          console.error("Erro ao carregar itens:", error);
          reportError("Não foi possível carregar a listagem de itens do servidor. Tente novamente mais tarde.");
        } finally {
          setLoading(false);
        }
      };
    fetchItems(filters)
  }, [filters , reportError]);

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      status: "",
      categoria: "",
      local: "",
      busca: "",
    });
  };

  return {
    items,
    loading,
    filters,
    setFilters: updateFilters,
    clearFilters,
    refetch: () => setFilters({
    status: initialFilters.status || "",
    categoria: initialFilters.categoria || "",
    local: initialFilters.local || "",
    busca: initialFilters.busca || "",
  }),
  };
}