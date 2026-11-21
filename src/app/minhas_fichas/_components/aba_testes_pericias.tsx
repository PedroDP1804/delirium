import { pericias_atributos, type Atributos, type Pericias, type Personagem, type Treinamento } from "@/src/lib/FM/personagem";
import { Dices } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/src/components/ui/tooltip"
import { atributo_letra, bonus_treinamento, modificador, nome_atributo_letra } from "@/src/lib/FM/funcoes_personagem";


// Ícone de Dados que mostra texto quando passa o mouse em cima
function BotãoDado({texto}:{texto:string}) {
    return (
        <Tooltip>
            <TooltipTrigger className="hover:bg-gray-400 h-8 w-8 flex justify-center items-center rounded-lg">
                <Dices/>
            </TooltipTrigger>
            <TooltipContent className="whitespace-pre-wrap">
                {texto}
            </TooltipContent>
        </Tooltip>
    )
}

// Linha com a perícia, grau de treinamento e BotãoDado mostrando o teste e seus bônus
function Pericia({nome, nivel, treinamento, atributos}:{nome:string, nivel:number, treinamento:Treinamento, atributos:Atributos}) {

    let texto_treinamento = ""
    let multiplicador_treinamento = 0
    switch (treinamento) {
        case "D":
            texto_treinamento = "Destreinado"
            multiplicador_treinamento = 0
            break
        case "T":
            texto_treinamento = "Treinado"
            multiplicador_treinamento = 1
            break
        case "M":
            texto_treinamento = "Mestre"
            multiplicador_treinamento = 1.5
            break
    }
    const atributo = pericias_atributos[nome as keyof typeof pericias_atributos]
    const bonus_total = modificador(atributo_letra(atributo, atributos)) + Math.trunc(nivel/2) + Math.trunc(multiplicador_treinamento*bonus_treinamento(nivel))

    const texto_rolagem =   `1d20 + ${bonus_total}`
                            + `\n\n1d20`
                            + `\n+ ${modificador(atributo_letra(atributo, atributos))} (Mod. ${nome_atributo_letra(atributo)})`
                            + `\n+ ${Math.trunc(nivel/2)} (Metade do nível)`
                            + `\n+ ${Math.trunc(multiplicador_treinamento*bonus_treinamento(nivel))} (Bônus de Treinamento)`

    return (
        <h2 className="text-lg flex gap-1">
            <BotãoDado texto={texto_rolagem}/>
            <b>{nome}: </b>
            {texto_treinamento}
        </h2>
    )
}




export function AbaTestesEPericias({personagem}:{personagem:Personagem}) {

    return (
        <section className="w-[70%] flex flex-col items-center">

            <div className="poligono1 h-max w-full bg-black p-0.5 max-w-300 overflow-hidden relative">
            <div className="bg-white poligono1 h-full">

                {/* Header */}
                <div className="h-24 border-b border-gray-500 pt-8">
                    <h1 className="pl-5 font-jujutsu-titulo text-4xl">
                        Testes & Perícias
                    </h1>
                </div>

                {/* Perícias */}
                <div className="pt-5 pb-6 pl-3 pr-[10%] border-b border-gray-500">

                    <h1 className="pl-3 font-jujutsu-titulo text-3xl">
                        Perícias
                    </h1>

                    <div className="flex gap-20 mt-2 pl-5">

                        {/* Perícias 1 a 10 */}
                        <ul className="flex flex-col gap-0">
                            {Object.keys(pericias_atributos).slice(0, 10).map((pericia, index)=>(
                                <Pericia key={index} nome={pericia} nivel={personagem.nivel} treinamento={personagem.pericias[pericia.toLowerCase() as keyof Pericias]} atributos={personagem.atributos}/>
                            ))}
                        </ul>

                        {/* Perícias 11 a 20 */}
                        <ul className="flex flex-col gap-0">
                            {Object.keys(pericias_atributos).slice(10, undefined).map((pericia, index)=>(
                                <Pericia key={index} nome={pericia} nivel={personagem.nivel} treinamento={personagem.pericias[pericia.toLowerCase() as keyof Pericias]} atributos={personagem.atributos}/>
                            ))}
                        </ul>

                    </div>

                </div>

            </div>
            </div>

        </section>
    )
}