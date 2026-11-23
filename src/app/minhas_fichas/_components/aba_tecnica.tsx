import { } from "@/src/lib/FM/funcoes_personagem"
import { atributos_chave_nome, type Personagem } from "@/src/lib/FM/personagem"
import { CardFeitico } from "./card_feitico"
import { feiticos_futuros } from "@/src/lib/FM/angelo"
import { InfoCDTécnica } from "./valores_calculados/info_cd_tecnica"

export function AbaTécnica({personagem}:{personagem:Personagem}) {

    if (personagem.técnica == null)
        return (
            <div className="poligono1 h-max w-full bg-black p-0.5 max-w-300 overflow-hidden relative">
                <div className="bg-white poligono1 h-full">
                    Este personagem não possui Técnica Amaldiçoada
                </div>
            </div>
        )

    return (
        <section className="w-[70%] flex flex-col items-center">

            <div className="poligono1 h-max w-full bg-black p-0.5 max-w-300 overflow-hidden relative">
                <div className="bg-white poligono1 h-full">

                    {/* Header */}
                    <div className="h-24 border-b border-gray-500 pt-8">
                        <h1 className="pl-5 font-jujutsu-titulo text-4xl">
                            Técnica Amaldiçoada
                        </h1>
                    </div>

                    {/* Descrição */}
                    <div className="pt-5 pb-6 pl-3 pr-[10%] border-b border-gray-500">

                        <h1 className="pl-3 font-jujutsu-titulo text-2xl">
                            Descrição
                        </h1>

                        <p className="font-jujutsu whitespace-pre-wrap">
                            {personagem.técnica?.descrição}
                        </p>

                    </div>

                    {/* Informações */}
                    <div className="pt-5 pb-6 pl-3 pr-[10%] border-b border-gray-500">
                        <div className="text-left flex flex-col justify-between">
                            
                            <div>
                                <InfoCDTécnica personagem={personagem}/>

                                <h2><b>Atributo CD: </b> {atributos_chave_nome[personagem.técnica?.atributo]}</h2>
                            </div>

                        </div>

                    </div>



                </div>
            </div>


            {/* Feitiços */}
            <div className="
                flex justify-center items-center
                mt-20 w-full h-max
            ">
                <div className="
                    bg-[url('/tinta.webp')] bg-local bg-cover bg-no-repeat bg-center
                    flex justify-center items-center
                    min-w-max w-150 h-30
                ">
                    <h1 className="font-jujutsu-titulo text-4xl">
                        Feitiços
                    </h1>
                </div>
            </div>

             <ul className="h-full flex flex-col items-center w-full gap-10 mt-10">
                {personagem.técnica.feitiços.map((h, i)=>(
                    <CardFeitico
                        key={i}
                        hab={h}
                    />
                ))}
            </ul>


            {/* Futuros */}
            <div className="
                flex justify-center items-center
                mt-20 w-full h-max
            ">
                <div className="
                    bg-[url('/tinta.webp')] bg-local bg-cover bg-no-repeat bg-center
                    flex justify-center items-center
                    min-w-max w-150 h-30
                ">
                    <h1 className="font-jujutsu-titulo text-4xl">
                        Ideias de Feitiços
                    </h1>
                </div>
            </div>

             <ul className="h-full flex flex-col items-center w-full gap-10 mt-10">
                {feiticos_futuros.map((h, i)=>(
                    <CardFeitico
                        key={i}
                        hab={h}
                    />
                ))}
            </ul>
            

        </section>
    )
}