import { atencao, atributo_letra, bonus_treinamento, cd_habilidade, defesa, modificador } from "@/src/lib/funcoes_personagem"
import { type Personagem } from "@/src/lib/personagem"

export function Principal({personagem}:{personagem:Personagem}) {

    return (
        <div className="poligono1 h-max w-full bg-black p-0.5 max-w-300 overflow-hidden relative">
            <div className="bg-white poligono1 h-full">

                {/* Nome do Personagem */}
                <div className="h-24 border-b border-gray-500 pt-8">
                    <h1 className="pl-5 font-jujutsu-titulo text-4xl">
                        {personagem.nome}
                    </h1>
                </div>

                {/* Informações principais */}
                <div className="flex justify-between pt-5 pb-6 pl-3 pr-[10%] border-b border-gray-500">

                    <div className="text-lg">
                        <h2><b>Origem: </b>{personagem.origem}</h2>
                        <h2><b>Especialização: </b>{personagem.especializacao}</h2>
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

                    <div className="text-lg text-right">
                        <h2><b>Nível: </b>{personagem.nivel}</h2>
                        <h2><b>Bônus de Treinamento: </b>+{bonus_treinamento(personagem.nivel)}</h2>
                        <h2><b>Grau: </b>{personagem.grau}º</h2>
                    </div>

                </div>

                {/* Stats */}
                <div className="flex justify-between h-max pt-5 pb-6 pl-3 pr-[10%] text-lg border-b border-gray-500">


                    {/* Atributos */}
                    <div className="text-right flex flex-col gap-3">
                        <div>
                            <h2><b>Força: </b>{personagem.atributos.forca} ({personagem.atributos.forca >= 10 ? "+" : ""}{modificador(personagem.atributos.forca)})</h2>
                            <h2><b>Destreza: </b>{personagem.atributos.destreza} ({personagem.atributos.destreza >= 10 ? "+" : ""}{modificador(personagem.atributos.destreza)})</h2>
                            <h2><b>Constituição: </b>{personagem.atributos.constituicao} ({personagem.atributos.constituicao >= 10 ? "+" : ""}{modificador(personagem.atributos.constituicao)})</h2>
                        </div>

                        <div>
                            <h2><b>Inteligência: </b>{personagem.atributos.inteligencia} ({personagem.atributos.inteligencia >= 10 ? "+" : ""}{modificador(personagem.atributos.inteligencia)})</h2>
                            <h2><b>Sabedoria: </b>{personagem.atributos.sabedoria} ({personagem.atributos.sabedoria >= 10 ? "+" : ""}{modificador(personagem.atributos.sabedoria)})</h2>
                            <h2><b>Presença: </b>{personagem.atributos.presenca} ({personagem.atributos.presenca >= 10 ? "+" : ""}{modificador(personagem.atributos.presenca)})</h2>
                        </div>
                    </div>
                    
                    {/* Stats 1 */}
                    <div className="text-right flex flex-col justify-between">
                        {/* PV */}
                        <div>
                            <h2>
                                <b>PV: </b>
                                <span
                                    className={
                                        (()=>{
                                            const p = personagem.stats.pv_atual / personagem.stats.pv_max
                                            if (p > 0.5 && p <= 0.75) return "text-purple-600"
                                            if (p > 0.25 && p <= 0.5) return "text-yellow-400"
                                            if (p <= 0.25) return "text-red-600"
                                        })()
                                    }
                                >
                                    {personagem.stats.pv_atual} / {personagem.stats.pv_max}
                                </span>
                            </h2>
                            <h2><b>PV Temp.: </b> {personagem.stats.pv_temp}</h2>
                            <h2>
                                <b>Integridade: </b>
                                <span
                                    className={
                                        (()=>{
                                            const p = personagem.stats.integridade_atual / personagem.stats.pv_max
                                            if (p > 0.5 && p <= 0.75) return "text-purple-600"
                                            if (p > 0.25 && p <= 0.5) return "text-yellow-400"
                                            if (p <= 0.25) return "text-red-600"
                                        })()
                                    }
                                >
                                    {personagem.stats.integridade_atual} / {personagem.stats.pv_max}
                                </span>
                            </h2>
                        </div>

                        {/* PE */}
                        <div>
                            <h2><b>PE: </b> {personagem.stats.pe_atual} / {personagem.stats.pe_max}</h2>
                            <h2><b>PE Temp.: </b> {personagem.stats.pe_temp}</h2>
                        </div>

                    </div>

                    {/* Stats 2 */}
                    <div className="text-right flex flex-col justify-between">
                        <div>
                            <h2><b>Defesa: </b> {defesa(personagem.atributos.destreza, personagem.nivel, personagem.bonus.defesa)}</h2>
                            <h2><b>CD Especialização ({personagem.atributo_cd}): </b> {cd_habilidade(atributo_letra(personagem.atributo_cd, personagem.atributos), personagem.nivel, personagem.bonus.cd_especializacao)}</h2>
                        </div>

                        <div>
                            <h2><b>Deslocamento: </b> {personagem.stats.deslocamento}m</h2>
                            <h2><b>Atenção: </b> {atencao(personagem.pericias.percepcao, personagem.bonus.atencao)}</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}