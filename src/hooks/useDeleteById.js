import { useState } from "react";
import { deleteById } from "@/services/itemServices";
import useError from "@hooks/useError";

export function useDeleteById() {
  const [loading, setLoading] = useState(false);
  const { reportError } = useError();

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const response = await deleteById(id);
      return response;
    } catch (error) {
      console.error("Erro ao deletar item:", error);
      reportError("Não foi possível excluir o item. Tente novamente mais tarde.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteById: handleDelete,
    loading,
  };
}