import { FaBoxOpen } from "react-icons/fa";
import ItemForm from "../features/ItemForm";

import { useGetItemById } from "@hooks/useGetItemById";
import {useParams } from "react-router-dom";
import { useEditItem } from "../hooks/useEditItem";
import { useEffect, useState } from "react";
import { CircleLoading } from "../components/Loading";
import { BackButton } from "../components/Button";

export default function EditItemPage() {
  const {id} = useParams()
  const {item , loading} = useGetItemById(id);
  const [data , setData] = useState({})
  const {editData , error} = useEditItem()

  useEffect(()=>{
    setData({...item})
  },[item])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    editData(id , data)
  }

   if (loading) return <CircleLoading/>

  return (
    <div className="max-w-3xl mx-auto py-6 px-4 sm:px-6">
          
      <BackButton/>
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 my-6">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <div className="p-3 bg-primary/10 text-primary rounded-xl">
            <FaBoxOpen className="text-2xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Editar Item: {item.nome}</h1>
            <p className="text-sm text-gray-500">Preencha as informações para alterar o item.</p>
          </div>
        </div>
        <ItemForm formData={data} handleChange={handleChange} handleSubmit={handleSubmit} formType="edit"/>
        {error && <div className="text-center my-5">
          {error}
        </div>}
        

      </div>
    </div>
  );
}