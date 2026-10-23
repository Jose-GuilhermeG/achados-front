import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseTemplate from "@layout/BaseTemplate";
import Home from "@pages/Home";
import CreateItemPage from "@pages/CreateItem";
import EditItemPage from "@pages/EditItem";
import ItemDetailPage from "@pages/ItemDetail";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<BaseTemplate />}>
            <Route path="" element={<Home/>} />
            <Route path="itens/create/" element={<CreateItemPage/>} />
            <Route path="itens/:id/edit/" element={<EditItemPage/>} />
            <Route path="itens/:id" element={<ItemDetailPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}