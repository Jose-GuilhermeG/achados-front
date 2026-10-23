import { useState } from "react";
import { createItem } from "@/services/itemServices";
import useError from "@hooks/useError";
import { useNavigate } from "react-router-dom";

export function useCreateItem() {
  const [loading, setLoading] = useState(false);
  const { reportError } = useError();
  const navigate = useNavigate();
  const handleCreateItem = async (data) => {
    setLoading(true);
    try {
      await createItem(data);
      navigate("/")
    } catch (error) {
      console.error("Erro ao criar item:", error);
      reportError("Não foi possível cadastrar o item. Verifique os dados e tente novamente mais tarde.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    createItem: handleCreateItem,
    loading,
  };
}