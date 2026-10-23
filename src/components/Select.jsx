export function Select({options = [], placeholder = "Selecione...", className = "", id , ...props }) {
  const selectId = id || props.name;

  return (
    <div className="w-full flex flex-col gap-1.5">
      <select
        id={selectId}
        className={`w-full px-3.5 py-2 text-gray-900 bg-white border rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
        border-gray-300 hover:border-gray-400 ${className}`}
        {...props}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}