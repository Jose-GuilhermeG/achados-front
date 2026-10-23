import { useState, useEffect, useCallback } from "react";
import { GetMyInfos } from "@services/accountServices";
import useError from "@hooks/useError";

export function useGetInfos() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { reportError } = useError();

  const fetchInfos = useCallback(async () => {
    setLoading(true);
    try {
      const data = await GetMyInfos();
      setUser(data);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      reportError("Não foi possível conectar ao servidor. Por favor, verifique sua conexão ou tente mais tarde.");
    } finally {
      setLoading(false);
    }
  }, [reportError]);

  useEffect(() => {
    fetchInfos();
    setUser(null)
    setLoading(false)
  }, [fetchInfos]);

  return { user, loading, refetch: fetchInfos };
}