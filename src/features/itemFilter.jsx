import { useState } from "react";

import { useGetLocals } from "@hooks/useGetLocals";
import { useGetCategories } from "@hooks/useGetCategories";
import { getStatus } from "@/utils/filters";

import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { FormButton } from "@components/Button";

import { FaSearch } from "react-icons/fa";


export default function ItemFilter({FilterQuery , clearFilters}){

    const {locals} = useGetLocals();
    const {categories} = useGetCategories();
    const [category,setCategory] = useState("");
    const [status,setStatus] = useState("");
    const [local,setLocal] = useState("");
    const [search,setSearch] = useState("");

    const clearFilter = (e)=>{
        e.preventDefault()
        setSearch("")
        setStatus("")
        setLocal("")
        setCategory("")
        clearFilters()
    }

    return (
        <form className="flex flex-col" action="" method="get" onSubmit={e=>FilterQuery(e,status,category,local,search)}>
            <Input icon={FaSearch} id="busca" placeholder="Buscar Item Perdido" value={search} onChange={e=>setSearch(e.target.value)}/>
            <div className="flex gap-10 my-5">
                <Select placeholder="Categoria" options={categories} onChange={e=>setCategory(e.target.value)} value={category}/>
                <Select placeholder="Status" options={getStatus()} onChange={e=>setStatus(e.target.value)} value={status} />
                <Select placeholder="Local" options={locals} onChange={e=>setLocal(e.target.value)} value={local}/>
                <FormButton>
                Filtrar
                </FormButton>
                <FormButton className="bg-red-500" onClick={clearFilter}>
                Limpar
                </FormButton>
            </div>
        </form>
    )
}