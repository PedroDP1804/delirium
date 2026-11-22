import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/src/components/ui/collapsible";
import { estilo_cor } from "@/src/lib/FM/estilos_feiticos";
import type { Feitiço } from "@/src/lib/FM/personagem";

type CardFeiticoProps = {
    hab: Feitiço,
}

export function CardFeitico({hab}:CardFeiticoProps) {

    const estilo_de_cor = estilo_cor(hab.caracteristicas.cor)

    return (
        <div className="flex flex-col h-full w-full max-w-300 overflow-hidden bg-black poligono1 relative p-px">
            <div className="poligono1">
            <Collapsible className="w-full h-full">

                {/* Nome da Hab */}
                <CollapsibleTrigger className="w-full">
                    <h1 className={`text-left indent-6 h-full pt-7 pb-6 text-shadow-sm text-shadow-black text-white ${estilo_de_cor.bg_nome} border-b border-black cursor-pointer font-bold text-xl`}>
                        {hab.nome} | Feitiço Nível {hab.nível} | {hab.custo} PE
                    </h1>
                </CollapsibleTrigger>

                <CollapsibleContent>

                    {/* Descritores */}
                    <div className={`h-max p-3 bg-white whitespace-pre-wrap`}>

                        {/* Cor */}
                        <p className="font-bold">{'>'} Cor:  <span className={estilo_de_cor.texto_cor}>{hab.caracteristicas.cor}</span></p>

                        {/* Conjuração */}
                        {hab.caracteristicas.conjuração && <p><b>{'>'} Conjuração:</b>  {hab.caracteristicas.conjuração}</p>}

                        {/* Alcance */}
                        {hab.caracteristicas.alcance && <p><b>{'>'} Alcance:</b>  {hab.caracteristicas.alcance}</p>}

                        {/* Alvo */}
                        {hab.caracteristicas.alvo && (<p><b>{'>'} Alvo:</b>  {hab.caracteristicas.alvo}</p>)} 

                        {/* Duração */}
                        {hab.caracteristicas.duração && (<p><b>{'>'} Duração:</b>  {hab.caracteristicas.duração}</p>)} 

                        {/* Requisitos */}
                        {hab.caracteristicas.requisitos.map((r, i)=>(
                            <p key={i}><b>{'>'} Requisito {i+1}:</b>  {r}</p>
                        ))}

                    </div>

                    {/* Descrição */}
                    <Collapsible className="w-full flex flex-col">
                    
                        <CollapsibleTrigger>
                            <h2 className={`text-shadow-md/60 text-left indent-6 h-full w-full py-2 text-white ${estilo_de_cor.bg_secoes} border-y border-black cursor-pointer font-bold text-lg`}>
                                Descrição
                            </h2>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <div className={`h-full p-3 bg-white pb-5 flex flex-col gap-4`}>

                                <p className="whitespace-pre-wrap">
                                    {hab.descrição.mecânica}
                                </p>

                                <p className="whitespace-pre-wrap italic">
                                    {hab.descrição.narrativa}
                                </p>

                            </div>
                        </CollapsibleContent>

                    </Collapsible>

                    {/* Observações */}
                    <Collapsible className="w-full bg-blue-200 flex flex-col">
                    
                        <CollapsibleTrigger>
                            <h2 className={`text-shadow-md/60 text-left indent-6 h-full w-full py-2 text-white ${estilo_de_cor.bg_secoes} border-y border-black cursor-pointer font-bold text-lg`}>
                                Observações
                            </h2>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <div className={`h-full px-3 py-5 bg-white flex flex-col gap-2`}>

                                {hab.observações.length > 0 ?
                                    (
                                        hab.observações.map((o, i)=>(
                                            <p key={i} className="indent-5 whitespace-pre-wrap">
                                                •    {o}
                                            </p>
                                        ))        
                                    )
                                :
                                    (
                                        <p className="indent-5 whitespace-pre-wrap">
                                            Sem observações
                                        </p>
                                    )
                                }

                            </div>
                        </CollapsibleContent>

                    </Collapsible>

                </CollapsibleContent>
            </Collapsible>
            </div>
        </div>
    );
}
