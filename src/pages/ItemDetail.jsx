import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, FormButton , BackButton } from "@/components/Button";
import { Input } from "@/components/Input";
import {useGetItemById} from "@hooks/useGetItemById";
import { 
  FaArrowLeft, 
  FaEdit, 
  FaTrash, 
  FaCheckCircle, 
  FaTag, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaUserCheck, 
  FaExclamationTriangle 
} from "react-icons/fa";
import { CircleLoading } from "../components/Loading";

import { formatDate } from "@/utils/date";
import { useDeleteById } from "../hooks/useDeleteById";
import { useDeliverItem } from "../hooks/useDeliverd";


export default function ItemDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {item , loading , refetch} = useGetItemById(id)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeliverModalOpen, setIsDeliverModalOpen] = useState(false);
  const [deliveredName, setDeliveredName] = useState("");

  const { deleteById, loading: deleting } = useDeleteById();
  const { deliverItem, loading: delivering } = useDeliverItem();

const handleDeleteConfirm = async () => {
    try{
        await deleteById(id)
        navigate("/");
      }catch(e){}
    };
    

  const handleDeliverConfirm = async (e) => {
    e.preventDefault();
  
  try {
        await deliverItem(item.id,{devolvido_para: deliveredName});
        setIsDeliverModalOpen(false);
        refetch()
  } catch (error) {
  }
};

  if (loading) return <CircleLoading/>

  return (
    <div className="max-w-3xl mx-auto py-6 px-4 sm:px-6">
      
      <BackButton/>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              <FaTag className="text-[10px]" /> {item.categoria}
            </span>
            <h1 className="text-2xl font-bold text-gray-900">{item.nome}</h1>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border w-fit ${
            item.status === "devolvido" 
              ? "bg-green-100 text-green-800 border-green-200" 
              : "bg-amber-100 text-amber-800 border-amber-200"
          }`}>
            {item.status.toUpperCase()}
          </span>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">Descrição</h3>
          <p className="text-gray-800 bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-sm">
            {item.descricao || "Nenhuma descrição informada."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
            <FaMapMarkerAlt className="text-primary text-lg shrink-0" />
            <div>
              <span className="text-xs text-gray-500 block">Local Encontrado</span>
              <strong className="text-sm text-gray-800">{item.local}</strong>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
            <FaCalendarAlt className="text-primary text-lg shrink-0" />
            <div>
              <span className="text-xs text-gray-500 block">Data Encontrado</span>
              <strong className="text-sm text-gray-800">{formatDate(item.data_encontrado)}</strong>
            </div>
          </div>
        </div>

        {item.status === "devolvido" && (
          <div className="bg-green-50/70 border border-green-200 rounded-xl p-4 text-xs text-green-900 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-medium text-sm">
              <FaUserCheck className="text-primary" />
              <span>Devolvido para: <strong className="text-green-950">{item.devolvido_para}</strong></span>
            </div>
            {item.data_devolucao && (
              <span className="text-green-700 pl-6">
                Data da devolução: {formatDate(item.data_devolucao)}
              </span>
            )}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-gray-100">
          {item.status !== "devolvido" && (
            <Button
              variant="primary"
              onClick={() => setIsDeliverModalOpen(true)}
            >
              <FaCheckCircle /> Marcar como Entregue
            </Button>
          )}

          <Button
            variant="secondary"
            onClick={() => navigate(`/itens/${item.id}/edit`)}
          >
            <FaEdit /> Editar
          </Button>

          <Button
            variant="danger"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            <FaTrash /> Deletar
          </Button>
        </div>

      </div>
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center space-y-4 animate-fadeIn">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl">
              <FaExclamationTriangle />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Tem certeza?</h3>
            <p className="text-sm text-gray-600">
              Esta ação não pode ser desfeita. O item será permanentemente removido do sistema.
            </p>
            <div className="flex gap-3 pt-2">
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                variant="danger"
                className="flex-1"
                onClick={handleDeleteConfirm}
              >
                Sim, Deletar
              </Button>
            </div>
          </div>
        </div>
      )}

      {isDeliverModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <FaUserCheck className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Marcar como Entregue</h3>
                <p className="text-xs text-gray-500">Informe para quem o item foi devolvido.</p>
              </div>
            </div>

            <form onSubmit={handleDeliverConfirm} className="space-y-4">
              <Input
                label="Nome de quem recebeu"
                placeholder="Digite o nome completo"
                value={deliveredName}
                onChange={(e) => setDeliveredName(e.target.value)}
                required
              />

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="secondary"
                  className="flex-1"
                  onClick={() => setIsDeliverModalOpen(false)}
                >
                  Cancelar
                </Button>
                <FormButton className="flex-1">
                  Confirmar Entrega
                </FormButton>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}