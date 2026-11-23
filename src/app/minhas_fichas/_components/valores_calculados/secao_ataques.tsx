import { ScanSearch } from "lucide-react"
import { Informativo } from "../informativo"
import type { Personagem } from "@/src/lib/FM/personagem"
import { bônus_treinamento, modificador_atributo } from "@/src/lib/FM/funcoes_personagem"


export function SeçãoAtaques({personagem}:{personagem:Personagem}) {

    const metade_nível = Math.trunc(personagem.nível/2)
    const bônus_de_treinamento = bônus_treinamento(personagem.nível)

    // Ataque desarmado
    const modificador_força = modificador_atributo(personagem.atributos.força, personagem.bônus.atributos.força)
    const total_desarmado = modificador_força + metade_nível + bônus_de_treinamento
    const informativo_desarmado = `1d20\n+ ${modificador_força} (mod. força)\n+ ${metade_nível} (metade do nível)\n+ ${bônus_de_treinamento} (bônus de treinamento)\n= 1d20 + ${total_desarmado}`
    
    // Ataque amaldiçoado
    const modificador_sabedoria = modificador_atributo(personagem.atributos.sabedoria, personagem.bônus.atributos.sabedoria)
    const total_amaldiçoado = modificador_sabedoria + metade_nível + bônus_de_treinamento
    const informativo_amaldiçoado = `1d20\n+ ${modificador_sabedoria} (mod. sabedoria)\n+ ${metade_nível} (metade do nível)\n+ ${bônus_de_treinamento} (bônus de treinamento)\n= 1d20 + ${total_desarmado}`

    // Leque
    const modificador_destreza = modificador_atributo(personagem.atributos.destreza, personagem.bônus.atributos.destreza)
    const total_leque = modificador_destreza + metade_nível + bônus_de_treinamento
    const informativo_leque = `1d20\n+ ${modificador_destreza} (mod. destreza)\n+ ${metade_nível} (metade do nível)\n+ ${bônus_de_treinamento} (bônus de treinamento)\n= 1d20 + ${total_desarmado}`
    

    const ataques = [
        {nome: "Ataque Desarmado", teste:`1d20 + ${total_desarmado}`, dano:"1d4 Im", texto_informativo: informativo_desarmado},
        {nome: "Ataque Amaldiçoado", teste:`1d20 + ${total_amaldiçoado}`, dano:"?", texto_informativo: informativo_amaldiçoado},
        {nome: "Leque", teste:`1d20 + ${total_leque}`, dano:"1d6 + 2 Im/Ct", texto_informativo: informativo_leque},
    ]

    return(
        <ul className="flex flex-col mt-5 gap-3 pl-1">

            {ataques.map((ataque, index)=>(
                <li key={index} className="rounded border border-[#888888] pl-5 py-2">

                    <h2 className="text-lg font-bold mb-2">
                        {ataque.nome}
                    </h2>

                    <h2 className="flex items-center gap-1">
                        Teste: {ataque.teste}
                        <Informativo texto={ataque.texto_informativo} icone={<ScanSearch color="#777777"/>}/>
                    </h2>

                    <h2 className="flex items-center gap-1">
                        Dano: {ataque.dano}
                    </h2>
                </li>
            ))}
            

        </ul>
    )
}