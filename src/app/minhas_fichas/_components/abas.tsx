import { CircleChevronLeft, CircleChevronRight } from "lucide-react"

type AbasProps = {
    funcao: (aba:number)=>void,
    atual: number,
}

export function Abas({funcao, atual}:AbasProps) {

    const abas = [
        {
            texto: "Principal",
            indice: 0,
        },
        {
            texto: "Técnica",
            indice: 1,
        },
        {
            texto: "Habilidades",
            indice: 2,
        },
        {
            texto: "Aptidões",
            indice: 3,
        },
        {
            texto: "Testes & Perícias",
            indice: 4,
        },
        {
            texto: "Inventário",
            indice: 5,
        },
        // {
        //     texto: "Descrição",
        //     indice: 6,
        // },
    ]

    return (
        <div className="bg-black p-px poligono2 mt-10 h-20">

            {/* Tela Pequena */}
            <nav className="h-full bg-white poligono2 flex justify-center items-center text-nowrap min-[1450px]:hidden">

                <button className="mx-2" onClick={()=>{funcao(atual > 0 ? atual-1 : 5)}}>
                    <CircleChevronLeft height={35} width={35}/>
                </button>
                
                <h2 className="py-3 px-10 text-center w-55 cursor-pointer hover:bg-gray-200 rounded-md text-xl text-shadow-lg">
                    {abas.find((aba)=>(aba.indice == atual))?.texto}
                </h2>

                <button className="mx-2" onClick={()=>{funcao(atual < 5 ? atual+1 : 0)}}>
                    <CircleChevronRight height={35} width={35}/>
                </button>

            </nav>

            {/* Tela Grande */}
            <nav className="w-full h-full bg-white poligono2 flex justify-around items-center text-nowrap px-3 max-[1450px]:hidden">

                {abas.map((aba)=>(
                    <button
                        key={aba.indice}
                        className={`
                            py-3 px-10
                            cursor-pointer hover:bg-gray-200 rounded-md
                            text-xl text-shadow-lg
                            ${atual == aba.indice && "underline"}
                        `}
                        onClick={()=>{funcao(aba.indice)}}
                    >
                        {aba.texto}
                    </button>
                ))}
                
            </nav>

        </div>
    )
}