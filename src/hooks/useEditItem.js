import { useState } from "react";
import useError from "@hooks/useError";
import { useNavigate } from "react-router-dom";
import { editItem } from "../services/itemServices";

export function useEditItem() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const { reportError } = useError();

  const editData = async (id,data) => {
    setLoading(true);
    try {
      editItem(id , data)
      navigate("/")
    } catch (error) {
      console.error("Erro ao editar item:", error);
      if(error.status == 404){
        navigate("/")
      }else{
          reportError("Não foi possível carregar o item atual de itens do servidor. Tente novamente mais tarde.");
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    error,
    setError,
    loading,
    editData,
  };
}