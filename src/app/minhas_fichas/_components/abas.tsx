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
        {
            texto: "Descrição",
            indice: 6,
        },
    ]

    return (
        <div className="bg-black p-px poligono2 w-[70%] h-20 mt-10">
        <nav className="w-full h-full bg-white poligono2 flex justify-around items-center px-3">

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