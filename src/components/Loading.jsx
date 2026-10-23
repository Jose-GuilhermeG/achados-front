import { VscLoading } from "react-icons/vsc";

export function CircleLoading(){
    return (
        <div className="w-full h-full my-5 flex flex-col justify-center items-center">
            <div className="flex justify-center items-center py-20 text-gray-500">
                Carregando pagina....
            </div>
            <VscLoading className="animate-spin w-10 h-10"/>
        </div>
    )
}