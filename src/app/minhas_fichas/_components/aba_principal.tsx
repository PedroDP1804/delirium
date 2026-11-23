import { bônus_treinamento } from "@/src/lib/FM/funcoes_personagem"
import { atributos_chave_nome, type Atributos, type Personagem } from "@/src/lib/FM/personagem"
import { InfoAtributo } from "./valores_calculados/info_atributo"
import { InfoPV } from "./valores_calculados/info_pv"
import { InfoPE } from "./valores_calculados/info_pe"
import { InfoDefesa } from "./valores_calculados/info_defesa"
import { InfoCDEspecialização } from "./valores_calculados/info_cd_especializacao"
import { InfoDeslocamento } from "./valores_calculados/info_deslocamento"
import { InfoAtenção } from "./valores_calculados/info_atencao"
import { InfoIniciativa } from "./valores_calculados/info_iniciativa"

export function AbaPrincipal({personagem}:{personagem:Personagem}) {

    return (
        <div className="poligono1 h-max bg-black p-0.5 w-[90vw] max-w-300 max-[800px]:max-w-[500px] overflow-hidden relative">
        <div className="bg-white poligono1 h-full w-full">

            {/* Nome do Personagem */}
            <div className="min-h-24 border-b border-gray-500 pt-8">
                <h1 className="pl-5 pr-3 pb-3 font-jujutsu-titulo text-4xl">
                    {personagem.nome}
                </h1>
            </div>

            {/* Informações principais */}
            <div className={`
                flex justify-between flex-col min-[800px]:flex-row gap-7 min-[800px]:gap-0
                pt-5 pb-6 pl-4 pr-3 min-[800px]:pr-7
                border-b border-gray-500
            `}>

                <div className="text-lg">
                    <h2><b>Origem: </b>{personagem.origem}</h2>
                    <h2><b>Especialização: </b>{personagem.especialização}</h2>
                    <h2 className="font-bold">Técnica:{' '}
                        <span className="text-[#ff0000]">A</span>
                        <span className="text-[#ff7300]">q</span>
                        <span className="text-[#ffee00]">u</span>
                        <span className="text-[#09ff00]">a</span>
                        <span className="text-[#00c3ff]">r</span>
                        <span className="text-[#0004ff]">e</span>
                        <span className="text-[#9900ff]">l</span>
                        <span className="text-[#ff00dd]">a</span>
                    </h2>
                </div>

                <div className="text-lg min-[800px]:text-right">
                    <h2><b>Nível: </b>{personagem.nível}</h2>
                    <h2><b>Bônus de Treinamento: </b>+{bônus_treinamento(personagem.nível)}</h2>
                    <h2><b>Grau: </b>{personagem.grau}º</h2>
                </div>

            </div>

            {/* ----------------------------------------------------------------------------------------------- */}

            {/* Stats */}
            <div className={`
                flex justify-between flex-col min-[800px]:flex-row gap-7 min-[800px]:gap-0
                h-max pt-5 pb-15 pl-4 pr-7
                text-lg border-b border-gray-500
            `}>


                {/* Atributos */}
                <div className="min-[800px]:text-right flex flex-col gap-3">
                    
                    {/* Físicos */}
                    <div className="flex flex-col min-[800px]:items-end">
                        {Object.keys(atributos_chave_nome).slice(0, 3).map((atributo, index)=>(
                            <InfoAtributo
                                key={index}
                                nome={atributos_chave_nome[atributo as keyof Atributos]}
                                base_atributo={personagem.atributos[atributo as keyof Atributos]}
                                lista_bônus_atributo={personagem.bônus.atributos[atributo as keyof Atributos]}
                            />
                        ))}
                    </div>

                    {/* Mentais */}
                    <div className="flex flex-col min-[800px]:items-end">
                        {Object.keys(atributos_chave_nome).slice(3, 6).map((atributo, index)=>(
                            <InfoAtributo
                                key={index}
                                nome={atributos_chave_nome[atributo as keyof Atributos]}
                                base_atributo={personagem.atributos[atributo as keyof Atributos]}
                                lista_bônus_atributo={personagem.bônus.atributos[atributo as keyof Atributos]}
                            />
                        ))}
                    </div>

                </div>
                
                {/* Stats 1 */}
                <div className="flex flex-col justify-between min-[800px]:items-end">

                    {/* PV */}
                    <InfoPV personagem={personagem}/>

                    {/* PE */}
                    <InfoPE personagem={personagem}/>

                </div>

                {/* Stats 2 */}
                <div className="min-[800px]:text-right flex flex-col justify-between">
                    <div className="flex flex-col min-[800px]:items-end">
                        <InfoDefesa personagem={personagem}/>
                        <InfoCDEspecialização personagem={personagem}/>
                        <InfoIniciativa personagem={personagem}/>
                    </div>

                    <div className="flex flex-col min-[800px]:items-end">
                        <InfoDeslocamento personagem={personagem}/>
                        <InfoAtenção personagem={personagem}/>
                    </div>
                </div>

            </div>

        </div>
        </div>
    )
}