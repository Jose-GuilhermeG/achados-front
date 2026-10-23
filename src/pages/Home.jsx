import { useGetItems } from "@hooks/useGetItems";
import { VscLoading } from "react-icons/vsc";
import ItemFilter from "../features/itemFilter";
import ItensList from "../features/itemList";
import { CircleLoading } from "../components/Loading";

export default function Home() {

  const {items , loading , setFilters ,clearFilters  } = useGetItems()

  const FilterQuery = (e , status , category , local , search)=>{
    e.preventDefault();
    setFilters({
      status: status,
      categoria: category,
      local: local,
      busca: search,
    })
  }

  return (
    <section>
      <ItemFilter FilterQuery={FilterQuery} clearFilters={clearFilters}/>
      {loading ? 
        <CircleLoading/> : 
        <ItensList items={items}/>
      }
    </section>
  )
}

