import { useContext } from "react";

import ErrorContext from "@contexts/ErrorContext"

export default function useError() {
  return useContext(ErrorContext);
}