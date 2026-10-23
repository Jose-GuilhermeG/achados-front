import { FaMapMarkerAlt, FaCalendarAlt, FaUserCheck, FaTag } from "react-icons/fa";

import { formatDate } from "@/utils/date";

export function FoundItemCard({ item, className = "", ...props }) {
  if (!item) return null;

  const {
    nome,
    descricao,
    categoria,
    local,
    data_encontrado,
    status,
    devolvido_para,
    data_devolucao
  } = item;

  const statusConfig = {
    devolvido: {
      bg: "bg-green-100 text-green-800 border-green-200",
      label: "Devolvido",
    },
    aguardando: {
      bg: "bg-amber-100 text-amber-800 border-amber-200",
      label: "Disponível",
    }
  };

  const currentStatus = statusConfig[status?.toLowerCase()] || {
    bg: "bg-gray-100 text-gray-800 border-gray-200",
    label: status || "aguardando",
  };


  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between gap-4 hover:scale-105 shadow-xl ${className}`}
      {...props}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary mb-1">
            <FaTag className="text-[10px]" /> {categoria}
          </span>
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {nome}
          </h3>
        </div>
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${currentStatus.bg} shrink-0`}>
          {currentStatus.label}
        </span>
      </div>

      {descricao && (
        <p className="text-gray-600 text-sm bg-gray-50 p-2.5 rounded-lg border border-gray-100">
          {descricao}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-500 pt-1 border-t border-gray-100">
        <div className="flex items-center gap-1.5">
          <FaMapMarkerAlt className="text-primary shrink-0" />
          <span className="truncate">Local: <strong className="text-gray-700">{local}</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <FaCalendarAlt className="text-primary shrink-0" />
          <span>Encontrado: <strong className="text-gray-700">{formatDate(data_encontrado)}</strong></span>
        </div>
      </div>

      {status === "devolvido" && devolvido_para && (
        <div className="bg-green-50/70 border border-green-200 rounded-lg p-2.5 text-xs text-green-900 flex flex-col gap-1">
          <div className="flex items-center gap-1.5 font-medium">
            <FaUserCheck className="text-primary shrink-0" />
            <span>Devolvido para: <strong className="text-green-950">{devolvido_para}</strong></span>
          </div>
          {data_devolucao && (
            <span className="text-green-700 pl-4">
              Data da devolução: {formatDate(data_devolucao)}
            </span>
          )}
        </div>
      )}
    </div>
  );
}