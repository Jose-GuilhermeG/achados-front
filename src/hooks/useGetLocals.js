import { useState, useEffect } from "react";
import { getLocals } from "@services/itemServices";
import useError from "@hooks/useError";

export function useGetLocals() {
  const [locals, setLocals] = useState([]);
  const [loading, setLoading] = useState(true);
  const { reportError } = useError();

  useEffect(() => {
    const fetchLocals = async () => {
    setLoading(true);
    try {
      const data = await getLocals();
      setLocals(data);
    } catch (error) {
      console.error("Erro ao buscar locais:", error);
      reportError("Não foi possível carregar os locais do sistema.");
    } finally {
      setLoading(false);
    }
    };
    fetchLocals();
  },[reportError]);

  return { locals, loading };
}