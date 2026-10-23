export const getStatus = ()=>{
    return [
        "aguardando",
        "devolvido",
    ]
}

export const cleanFilters = (filters) => Object.fromEntries(
    Object.entries(filters).filter(([key, value]) => value !== "" && value != null)
);