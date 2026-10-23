import { useState } from "react";

import { FaBoxOpen } from "react-icons/fa";
import ItemForm from "../features/ItemForm";
import { useCreateItem } from "../hooks/useCreateItem";
import { CircleLoading } from "../components/Loading";

export default function CreateItemPage() {
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    categoria: "",
    local: "",
    data_encontrado: new Date().toISOString().split("T")[0],
  });
  const {createItem , loading} = useCreateItem()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createItem(formData);
  };

  if(loading) return <CircleLoading/>

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 my-6">
      
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="p-3 bg-primary/10 text-primary rounded-xl">
          <FaBoxOpen className="text-2xl" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Cadastrar Novo Item</h1>
          <p className="text-sm text-gray-500">Preencha as informações do item encontrado.</p>
        </div>
      </div>

      <ItemForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}