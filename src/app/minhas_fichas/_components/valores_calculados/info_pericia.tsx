import { bônus_treinamento, modificador_atributo, multiplicador_treinamento } from "@/src/lib/FM/funcoes_personagem";
import { type Atributos, type Perícias, type Personagem, perícias_atributos } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { Dices } from "lucide-react";

type InfoPericiaProps = {
    nome:string,
    personagem:Personagem 
}

export function InfoPericia({nome, personagem}:InfoPericiaProps) {

    // Chaves
    const chave_perícia = nome as keyof Perícias
    const chave_atributo = perícias_atributos[chave_perícia] as keyof Atributos
    
    // Modificador de atributo
    const base_atributo = personagem.atributos[chave_atributo]
    const lista_bonus_atributo = personagem.bônus.atributos[chave_atributo]

    const modificador_atributo_base = modificador_atributo(base_atributo, lista_bonus_atributo)

    // Bônus de Treinamento
    const treinamento = personagem.perícias[chave_perícia]
    const multiplicador_bonus_treinamento = multiplicador_treinamento(treinamento)
    const soma_treinamento = Math.trunc(multiplicador_bonus_treinamento * bônus_treinamento(personagem.nível))

    // Bônus extras da perícia
    const lista_bônus_pericia = personagem.bônus.perícias.filter((bônus_pericia)=>(bônus_pericia.perícia == chave_perícia))
    let total_bônus_extras_pericia = 0
    lista_bônus_pericia.forEach((bônus_perícia)=>{total_bônus_extras_pericia += bônus_perícia.bônus.valor})


    // Cálculo final e texto do informativo
    const bônus_total_pericia = modificador_atributo_base + Math.trunc(personagem.nível/2) + soma_treinamento + total_bônus_extras_pericia

    let texto_rolagem =   `1d20 + ${bônus_total_pericia}`
                            + `\n\n1d20`
                            + `\n+ ${modificador_atributo_base} (Mod. ${chave_atributo})`
                            + `\n+ ${Math.trunc(personagem.nível/2)} (Metade do nível)`
                            + `\n+ ${soma_treinamento} (${multiplicador_bonus_treinamento} x Bônus de Treinamento)`
    lista_bônus_pericia.forEach((bônus)=>{texto_rolagem += `\n+ ${bônus.bônus.valor} (${bônus.bônus.fonte})`})

    // Deixar primeira letra maiscula
    const texto_pericia = nome[0]?.toLocaleUpperCase() + nome.slice(1,undefined)

    return (
        <h2 className="text-lg flex gap-1">
            <Informativo texto={texto_rolagem} icone={<Dices/>}/>
            <b>{texto_pericia}: </b>
            {treinamento}
        </h2>
    )
}