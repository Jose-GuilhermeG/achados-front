import { FaBoxOpen, FaUserCircle } from "react-icons/fa";
import useAccount from "@hooks/useAccount";
import { Link } from "react-router-dom";
import { CgAdd } from "react-icons/cg";

export default function Header() {
  const { user, loading } = useAccount();

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <Link to="" className="flex items-center space-x-2.5 cursor-pointer">
          <FaBoxOpen className="text-2xl" />
          <span className="text-xl font-bold tracking-tight">PerdeuAchou</span>
        </Link>

        <div className="flex items-center justify-center gap-10">
          <Link to="itens/create" className="flex items-center gap-2">
            <CgAdd className="w-5 h-5"/>
            Adicionar Item
          </Link>
          <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full">
            <FaUserCircle className="text-xl text-white" />
            <span className="text-sm font-medium">
              {loading ? "Carregando..." : user?.nome || "Visitante"}
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}