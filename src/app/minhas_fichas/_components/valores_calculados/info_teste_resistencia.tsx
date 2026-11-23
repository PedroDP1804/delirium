import { bônus_treinamento, modificador_atributo, multiplicador_treinamento } from "@/src/lib/FM/funcoes_personagem";
import { type Atributos, type Personagem, type TestesResistência, resistencia_atributos } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { Dices } from "lucide-react";

type InfoTesteResistenciaProps = {
    nome:string,
    personagem:Personagem 
}

export function InfoTesteResistencia({nome, personagem}:InfoTesteResistenciaProps) {

    // Chaves
    const chave_TR = nome as keyof TestesResistência
    const chave_atributo = resistencia_atributos[chave_TR] as keyof Atributos
    
    // Modificador de atributo
    const base_atributo = personagem.atributos[chave_atributo]
    const lista_bonus_atributo = personagem.bônus.atributos[chave_atributo]

    const modificador_atributo_base = modificador_atributo(base_atributo, lista_bonus_atributo)

    // Bônus de Treinamento
    const treinamento = personagem.testes_resistência[chave_TR]
    const multiplicador_bonus_treinamento = multiplicador_treinamento(treinamento)
    const soma_treinamento = Math.trunc(multiplicador_bonus_treinamento * bônus_treinamento(personagem.nível))

    // Bônus extras do TR
    const lista_bônus_TR = personagem.bônus.testes_resistência.filter((bônus_TR)=>(bônus_TR.resistência == chave_TR))
    let total_bônus_extras_TR = 0
    lista_bônus_TR.forEach((bônus_TR)=>{total_bônus_extras_TR += bônus_TR.bônus.valor})


    // Cálculo final e texto do informativo
    const bônus_total_TR = modificador_atributo_base + Math.trunc(personagem.nível/2) + soma_treinamento + total_bônus_extras_TR

    let texto_rolagem =   `1d20 + ${bônus_total_TR}`
                            + `\n\n1d20`
                            + `\n+ ${modificador_atributo_base} (Mod. ${chave_atributo})`
                            + `\n+ ${Math.trunc(personagem.nível/2)} (Metade do nível)`
                            + `\n+ ${soma_treinamento} (${multiplicador_bonus_treinamento} x Bônus de Treinamento)`
    lista_bônus_TR.forEach((bônus)=>{texto_rolagem += `\n+ ${bônus.bônus.valor} (${bônus.bônus.fonte})`})

    // Deixar primeira letra maiscula
    const texto_TR = nome[0]?.toLocaleUpperCase() + nome.slice(1,undefined)

    return (
        <h2 className="text-lg flex gap-1">
            <Informativo texto={texto_rolagem} icone={<Dices/>}/>
            <b>{texto_TR}: </b>
            {treinamento}
        </h2>
    )
}