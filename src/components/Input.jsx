
export function Input({ icon: Icon, error, className = "", id, ...props }) {
  const inputId = id || props.name;

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="relative flex items-center w-full">
        {Icon && (
          <span className="absolute left-3.5 text-gray-400 flex items-center pointer-events-none">
            <Icon className="text-lg" />
          </span>
        )}

        <input
          id={inputId}
          className={`w-full py-2.5 text-gray-900 bg-white border rounded-lg text-sm transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
            Icon ? "pl-11 pr-3.5" : "px-3.5"
          } ${
            error ? "border-red-500 focus:ring-red-500" : "border-gray-300 hover:border-gray-400"
          } ${className}`}
          {...props}
        />
      </div>

      {error && <span className="text-xs text-red-500 mt-0.5">{error}</span>}
    </div>
  );
}