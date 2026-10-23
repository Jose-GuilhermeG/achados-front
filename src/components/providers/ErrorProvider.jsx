import { useState } from "react";
import ErrorContext from "@contexts/ErrorContext";

export default function ErrorProvider({ children }) {
  const [globalError, setGlobalError] = useState(null);

  const reportError = (message) => {
    if(!globalError) setGlobalError(message);
  };

  const clearError = () => {
    setGlobalError(null);
  };

  return (
    <ErrorContext.Provider value={{ globalError, reportError, clearError }}>
      {children}
      
      {globalError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center border-t-4 border-red-500">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Sistema Indisponível</h2>
            <p className="text-gray-600 mb-6 text-sm">
              {globalError}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity w-full"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      )}
    </ErrorContext.Provider>
  );
}