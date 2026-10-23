import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:opacity-90 shadow-sm",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function FormButton({ children, className = "", ...props }) {
  return (
    <button
      type="submit"
      className={`w-full py-2.5 px-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center justify-center gap-2 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function BackButton(){
  const navigate = useNavigate()
  
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary mb-6 transition-colors cursor-pointer"
    >
      <FaArrowLeft /> Voltar
    </button>
  )
}