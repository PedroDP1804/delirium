import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/src/components/ui/collapsible";
import type { Feitiço } from "@/src/lib/personagem";

type HabilidadeProps = {
    hab: Feitiço,
}

export function Habilidade({hab}:HabilidadeProps) {

    let estilo_de_cor = {
        texto_cor: "",
        texto_nome: "",
        bg_nome: "",
        bg_descritores: "",
        texto_secoes:"",
        bg_secoes: "",
        bg_textos: "",
    }
    switch (hab.caracteristicas.cor) {
        case "Verde":
            estilo_de_cor = {texto_cor: "text-[#00e927]", texto_nome: "text-white", bg_nome: "bg-[url(/bg-verde.png)] #16af08]", texto_secoes:"text-white", bg_descritores: "bg-green-50", bg_secoes: "bg-[#48d15f]", bg_textos: "bg-white", }
            break
        case "Azul":
            estilo_de_cor = {texto_cor: "text-[#1028ff]", texto_nome: "text-white", bg_nome: "bg-[url(/bg-azul.png)] [#4042d4]", texto_secoes:"text-white", bg_descritores: "bg-blue-50", bg_secoes: "bg-[#5263ff]", bg_textos: "bg-white", }
            break
    }

    return (
        <div className="flex flex-col h-full w-full max-w-300 overflow-hidden bg-black poligono1 relative p-px">
            <div className="poligono1">
            <Collapsible className="w-full h-full">

                {/* Nome da Hab */}
                <CollapsibleTrigger className="w-full">
                    <h1 className={`text-left indent-6 h-full pt-7 pb-3 text-shadow-sm text-shadow-black ${estilo_de_cor.texto_nome} ${estilo_de_cor.bg_nome} border-b border-black cursor-pointer font-bold text-xl`}>
                        {hab.nome} | Feitiço Nível {hab.nivel}
                    </h1>
                </CollapsibleTrigger>

                <CollapsibleContent>

                    {/* Descritores */}
                    <div className={`h-max p-3 ${estilo_de_cor.bg_descritores} whitespace-pre-wrap`}>

                        <p className="font-bold">{'>'} Cor:  <span className={estilo_de_cor.texto_cor}>{hab.caracteristicas.cor}</span></p>

                        <p><b>{'>'} Conjuração:</b>  {hab.caracteristicas.conjuracao}</p>

                        <p><b>{'>'} Alcance:</b>  {hab.caracteristicas.alcance}</p>

                        {hab.caracteristicas.alvo && (<p><b>{'>'} Alvo:</b>  {hab.caracteristicas.alvo}</p>)} 

                        {hab.caracteristicas.requisitos.map((r, i)=>(
                            <p key={i}><b>{'>'} Requisito {i+1}:</b>  {r}</p>
                        ))}

                    </div>

                    {/* Descrição */}
                    <Collapsible className="w-full flex flex-col">
                    
                        <CollapsibleTrigger>
                            <h2 className={`text-left indent-6 h-full w-full py-2 ${estilo_de_cor.texto_secoes} ${estilo_de_cor.bg_secoes} border-y border-black cursor-pointer font-bold text-lg`}>
                                Descrição
                            </h2>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <div className={`h-full p-3 ${estilo_de_cor.bg_textos} pb-5 flex flex-col gap-4`}>

                                <p className="whitespace-pre-wrap">
                                    {hab.descricao.mecanica}
                                </p>

                                <p className="whitespace-pre-wrap italic">
                                    {hab.descricao.narrativa}
                                </p>

                            </div>
                        </CollapsibleContent>

                    </Collapsible>

                    {/* Observações */}
                    <Collapsible className="w-full bg-blue-200 flex flex-col">
                    
                        <CollapsibleTrigger>
                            <h2 className={`text-left indent-6 h-full w-full py-2 ${estilo_de_cor.texto_secoes} ${estilo_de_cor.bg_secoes} border-y border-black cursor-pointer font-bold text-lg`}>
                                Observações
                            </h2>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <div className={`h-full px-3 py-5 ${estilo_de_cor.bg_textos} flex flex-col gap-2`}>

                                {hab.observacoes.length > 0 ?
                                    (
                                        hab.observacoes.map((o, i)=>(
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
