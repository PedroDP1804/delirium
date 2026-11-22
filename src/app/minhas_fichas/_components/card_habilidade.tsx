import type { Habilidade } from "@/src/lib/FM/personagem"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/src/components/ui/collapsible";

type CardHabilidadeProps = {
    habilidade:Habilidade
}

export function CardHabilidade({habilidade}:CardHabilidadeProps) {

    return (
        <div className="flex flex-col h-full w-full max-w-300 overflow-hidden bg-black poligono1 relative p-px">
        <div className="poligono1">

            <Collapsible className="w-full h-full">

                {/* Nome da Hab */}
                <CollapsibleTrigger className="w-full bg-white">
                    <h1 className="text-left indent-6 h-full pt-7 pb-6 text-shadow-sm text-shadow-gray-300 text-black border-b border-black cursor-pointer font-bold text-xl">
                        {habilidade.nome} | {habilidade.tipo}
                    </h1>
                </CollapsibleTrigger>

                <CollapsibleContent>

                    {/* Descrição */}
                    <div className="h-max py-8 p-3 bg-white whitespace-pre-wrap">

                        {/* Cor */}
                        <p className="whitespace-pre-wrap">
                            {habilidade.descrição}
                        </p>

                    </div>

                </CollapsibleContent>
            </Collapsible>

        </div>
        </div>
    );
}