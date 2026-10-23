import api from "@services/api"

export async function GetMyInfos() {
  try {
    const response = await api.get("/eu");
    return response.data;
  } catch (error) {
    console.error("Erro na requisição GetMyInfos:", error);
    throw error;
  }
}