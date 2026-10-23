import { useState, useEffect, useCallback } from "react";
import useError from "@hooks/useError";
import { getItemById } from "@services/itemServices";
import { useNavigate } from "react-router-dom";

export function useGetItemById(id) {
  const [itemId , setItemId] = useState(id);
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const { reportError } = useError();

  useEffect(() => {
    const fetchItems = async (id) => {
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
  };
    fetchItems(itemId);
  }, [id,reportError , navigate]);

  return {
    item,
    loading,
    refetch: () => setItemId(id),
  };
}