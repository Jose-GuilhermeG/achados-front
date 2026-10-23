import { useGetInfos } from "@hooks/useGetInfos";
import AccountContext from "@contexts/AccountContext";

export default function AccountProvider({ children }) {
  const { user, loading, refetch } = useGetInfos();

  return (
    <AccountContext.Provider value={{ user, loading, refetch }}>
      {children}
    </AccountContext.Provider>
  );
}