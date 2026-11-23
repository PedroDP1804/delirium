import type { Personagem } from "@/src/lib/FM/personagem";
import { modificador_atributo } from "@/src/lib/FM/funcoes_personagem";
import { Informativo, InformativoGrande } from "./informativo";
import { BookSearch, ScanSearch } from "lucide-react";

export function AbaInventário({personagem}:{personagem:Personagem}) {

    const modificador_força = modificador_atributo(personagem.atributos.força, personagem.bônus.atributos.força)
    const limite_espaços = 8 + 2*modificador_força
    const texto_informativo = `8\n+ 2*${modificador_força >=0 ? modificador_força : `(${modificador_força})`} (2 * mod. força)\n= ${limite_espaços}`

    const limite_custo = (()=>{
        switch (personagem.grau) {
            case 4:
                return {custo_1:2, custo_2:0, custo_3:0, custo_4:0}
            case 3:
                return {custo_1:3, custo_2:1, custo_3:0, custo_4:0}
            case 2:
                return {custo_1:3, custo_2:2, custo_3:1, custo_4:0}
            case 1:
                return {custo_1:3, custo_2:3, custo_3:2, custo_4:1}
            case "Especial":
                return {custo_1:999, custo_2:4, custo_3:3, custo_4:2}
        }
    })()

    // Função para deixar o texto vermelho se passar do limite
    function estilo_custo_espaço(usado:number, limite:number):string {
        if (limite == 999 || usado <= limite)
            return ""
        else
            return "text-red-600"
    }


    let espaços_usados = 0
    const custos_usados = {custo_1:0, custo_2:0, custo_3:0, custo_4:0}
    personagem.inventário.forEach((item)=>{
        espaços_usados += item.espaços
        custos_usados[`custo_${item.custo}` as keyof typeof custos_usados] += 1
    })

    return (
        <section className="w-[70%] flex flex-col items-center">

            <div className="poligono1 h-max w-full bg-black p-0.5 max-w-300 overflow-hidden relative">
                <div className="bg-white poligono1 h-full">

                    {/* Header */}
                    <div className="h-24 border-b border-gray-500 pt-8">
                        <h1 className="pl-5 font-jujutsu-titulo text-4xl">
                            Inventário
                        </h1>
                    </div>

                    {/* Limites */}
                    <div className="pt-5 pb-6 pl-3 pr-[10%] border-b border-gray-500">

                        {/* Contagem espaços */}
                        <h2 className={`text-xl flex items-center gap-1 ${estilo_custo_espaço(espaços_usados, limite_espaços)}`}>
                            <b>Espaços: </b>
                            {espaços_usados} / {limite_espaços}
                            <Informativo texto={texto_informativo} icone={<ScanSearch color="#777777"/>}/>
                        </h2>

                        {/* Contagem custos */}
                        <h2 className="text-xl font-bold">Custos:</h2>
                        <div className="pl-5">
                            <h2 className={`text-lg ${estilo_custo_espaço(custos_usados.custo_1, limite_custo.custo_1)}`}><b>- Custo 1: </b>{custos_usados.custo_1} / {limite_custo.custo_1}</h2>
                            <h2 className={`text-lg ${estilo_custo_espaço(custos_usados.custo_2, limite_custo.custo_2)}`}><b>- Custo 2: </b>{custos_usados.custo_2} / {limite_custo.custo_2}</h2>
                            <h2 className={`text-lg ${estilo_custo_espaço(custos_usados.custo_3, limite_custo.custo_3)}`}><b>- Custo 3: </b>{custos_usados.custo_3} / {limite_custo.custo_3}</h2>
                            <h2 className={`text-lg ${estilo_custo_espaço(custos_usados.custo_4, limite_custo.custo_4)}`}><b>- Custo 4: </b>{custos_usados.custo_4} / {limite_custo.custo_4}</h2>
                        </div>

                    </div>

                </div>

            </div>

            {/* Tabela de itens */}
            <div className="bg-black w-full poligono2 p-0.5 mt-12">
            <div className="bg-white w-full poligono2 pb-6">
            <table className="w-full">

                {/* Cabeçalho */}
                <thead><tr className="h-12 text-xl">
                    {["Item", "Descrição", "Espaços", "Custo"].map((header, index)=>(
                        <th key={index} className="w-1/4 border-x border-b border-[#777]">
                            {header}
                        </th>
                    ))}
                </tr></thead>

                {/* Corpo */}
                <tbody>
                    {personagem.inventário.map((item, index)=>(
                        <tr key={index} className="text-lg h-10 border border-[#999]">

                            <td className="border border-[#777] text-center">
                                <h2 className="indent-3">{item.nome}</h2>
                            </td>

                            <td className="border border-[#777] text-center pt-2 pl-2">
                            <InformativoGrande
                                titulo="Descrição"
                                texto={item.descrição}
                                icone={<BookSearch/>}
                            />
                            </td>

                            <td className="border border-[#777] text-center">
                                <h2 className="indent-3">{item.espaços}</h2>
                            </td>

                            <td className="border border-[#777] text-center">
                                <h2 className="indent-3">{item.custo}</h2>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>
            </div>
            </div>


        </section>
    )
}