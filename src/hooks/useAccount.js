import { useContext } from "react";
import AccountContext from "@contexts/AccountContext";


export default function useAccount() {
  return useContext(AccountContext);
}