import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { FormButton } from "@components/Button";

import { useGetCategories } from "@/hooks/useGetCategories";
import { useGetLocals } from "@/hooks/useGetLocals";
import { getStatus } from "@/utils/filters";

export default function ItemForm({handleSubmit,formData,handleChange,formType="register"}){

    const { categories, loading: loadingCategories } = useGetCategories();
    const { locals, loading: loadingLocals } = useGetLocals();
    const getSubimitText = ()=>{
        switch(formType){
            case "register":
                return "Cadastrar"
            case "edit":
                return "Editar Item"
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            
            <Input
                label="Nome do Item"
                name="nome"
                type="text"
                placeholder="Ex: Garrafa d'água Stanley"
                value={formData.nome}
                onChange={handleChange}
                required
            />
    
            <div className="w-full flex flex-col gap-1.5">
                <label htmlFor="descricao" className="text-sm font-medium text-gray-700">
                Descrição
                </label>
                <textarea
                id="descricao"
                name="descricao"
                rows="3"
                placeholder="Detalhes adicionais (cor, marca, estado...)"
                value={formData.descricao}
                onChange={handleChange}
                className="w-full px-3.5 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg text-sm transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-gray-400 resize-none"
                />
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                label="Categoria"
                name="categoria"
                placeholder={loadingCategories ? "Carregando..." : "Selecione a categoria"}
                options={categories}
                onChange={handleChange}
                value={formData.categoria}
                required
                />
    
                <Select
                label="Local Onde Foi Encontrado"
                name="local"
                placeholder={loadingLocals ? "Carregando..." : "Selecione o local"}
                options={locals}
                onChange={handleChange}
                value={formData.local}
                required
                />
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                label="Data em que foi encontrado"
                name="data_encontrado"
                type="date"
                value={formData.data_encontrado}
                onChange={handleChange}
                required
                />
    
                {formType == "edit" && <Select
                label="Status Inicial"
                name="status"
                placeholder="Selecione o status"
                options={getStatus()}
                checked={formData.status}
                onChange={handleChange}
                value={formData.status}
                required
                />}
            </div>
    
            {formData.status === "devolvido" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 animate-fadeIn">
                <Input
                    label="Devolvido para"
                    name="devolvido_para"
                    type="text"
                    placeholder="Nome da pessoa"
                    value={formData.devolvido_para}
                    onChange={handleChange}
                />
                <Input
                    label="Data da Devolução"
                    name="data_devolucao"
                    type="date"
                    value={formData.data_devolucao}
                    onChange={handleChange}
                />
                </div>
            )}
    
            <div className="pt-4">
                <FormButton type="submit">
                    {getSubimitText()}
                </FormButton>
            </div>
    
            </form>
    )
}