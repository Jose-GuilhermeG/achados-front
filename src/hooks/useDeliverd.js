import { useState } from "react";
import { deliverItem } from "@/services/itemServices";
import useError from "@hooks/useError";

export function useDeliverItem() {
  const [loading, setLoading] = useState(false);
  const { reportError } = useError();

  const handleDeliverItem = async (id, deliverData) => {
    setLoading(true);
    try {
      const response = await deliverItem(id, deliverData);
      return response;
    } catch (error) {
      console.error("Erro ao marcar item como entregue:", error);
      reportError("Não foi possível marcar o item como entregue. Tente novamente mais tarde.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    deliverItem: handleDeliverItem,
    loading,
  };
}