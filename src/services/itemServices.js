import api from "@services/api"
import { cleanFilters } from "../utils/filters";

export async function getItems(filters = {}) {
  try {
    const filter = cleanFilters(filters);
    const response = await api.get("/itens", {params: filter});
    return response.data;
  } catch (error) {
    console.error("Erro na requisição getItems:", error);
    throw error;
  }
}

export async function getCategories() {
  try {
    const response = await api.get("/categorias");
    return response.data;
  } catch (error) {
    console.error("Erro na requisição getCategories:", error);
    throw error;
  }
}

export async function getLocals() {
  try {
    const response = await api.get("/locais");
    return response.data;
  } catch (error) {
    console.error("Erro na requisição getLocals:", error);
    throw error;
  }
}

export async function getItemById(id) {
  try {
    const response = await api.get(`/itens/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro na requisição getItemById:", error);
    throw error;
  }
}

export async function editItem(id , data) {
    try {
    const response = await api.put(`/itens/${id}`,data);
    return response.data;
  } catch (error) {
    console.error("Erro na requisição editItem:", error);
    throw error;
  }
}

export async function createItem(data) {
  try {
    const response = await api.post("/itens", data);
    return response.data;
  } catch (error) {
    console.error("Erro na requisição createItem:", error.response?.data);
    throw error;
  }
}

export async function deleteById(id) {
  try {
    const response = await api.delete(`/itens/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro na requisição deleteById:", error);
    throw error;
  }
}


export async function deliverItem(id, data) {
  try {
    const response = await api.patch(`/itens/${id}/devolver`, data);
    return response.data;
  } catch (error) {
    console.error("Erro na requisição deliverItem:", error.response?.data || error);
    throw error;
  }
}