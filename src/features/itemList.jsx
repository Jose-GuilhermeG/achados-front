import {FoundItemCard} from "@components/ItemCard"
import { BiPackage } from "react-icons/bi"
import { useNavigate } from "react-router-dom"


export default function ItensList({items}){

    const navigate = useNavigate()

    if(items.length ) return (
        <div className="grid lg:grid-cols-2 gap-10">
            {items.map(item=>(
                <FoundItemCard item={item} key={item.id} onClick={()=>navigate(`itens/${item.id}`)} />
            ))}
        </div>
    )

    return (
         <div className="flex flex-col justify-center items-center m-auto w-full my-[20vh]">
                <BiPackage className="w-15 h-15"/>
                <h1 className="text-2xl font-black m-5">Nenhum Item Encontrado</h1>
        </div>
    )
}