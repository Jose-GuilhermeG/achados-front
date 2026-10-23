import { useState, useEffect, useCallback } from "react";
import useError from "@hooks/useError";
import { getItemById } from "@services/itemServices";
import { useNavigate } from "react-router-dom";

export function useGetItemById(id) {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const { reportError } = useError();

  const fetchItems = useCallback(async (id) => {
    setLoading(true);
    try {
      const data = await getItemById(id);
      setItem(data);
    } catch (error) {
      console.error("Erro ao carregar item:", error);
      if(error.status == 404){
        navigate("/")
      }else{
          reportError("Não foi possível carregar o item atual de itens do servidor. Tente novamente mais tarde.");
      }
    } finally {
      setLoading(false);
    }
  }, [reportError]);

  useEffect(() => {
    fetchItems(id);
  }, [id,fetchItems]);

  return {
    item,
    loading,
    refetch: () => fetchItems(id),
  };
}