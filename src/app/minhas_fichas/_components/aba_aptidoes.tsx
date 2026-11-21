import type { Personagem } from "@/src/lib/FM/personagem";
import { CardHabilidade } from "./card_habilidade";

export function AbaAptidões({personagem}:{personagem:Personagem}) {

    return (
        <section className="w-[70%] flex flex-col items-center">

            <div className="poligono1 h-max w-full bg-black p-0.5 max-w-300 overflow-hidden relative">
                <div className="bg-white poligono1 h-full">

                    {/* Header */}
                    <div className="h-24 border-b border-gray-500 pt-8">
                        <h1 className="pl-5 font-jujutsu-titulo text-4xl">
                            Aptidões Amaldiçoadas
                        </h1>
                    </div>

                    {/* Descrição */}
                    <div className="pt-5 pb-6 pl-3 pr-[10%] border-b border-gray-500">

                        <h1 className="pl-3 font-jujutsu-titulo text-3xl">
                            Níveis de Aptidão
                        </h1>

                        <ul className="flex flex-col gap-1 mt-2 pl-5">

                            <h2 className="text-lg"><b>Aptidão em Aura (AU): </b>{personagem.aptidao.aura}</h2>
                            <h2 className="text-lg"><b>Aptidão em Controle e Leitura (CL): </b>{personagem.aptidao.controle_leitura}</h2>
                            <h2 className="text-lg"><b>Aptidão em Barreira (BAR): </b>{personagem.aptidao.barreira}</h2>
                            <h2 className="text-lg"><b>Aptidão em Domínio (DOM): </b>{personagem.aptidao.dominio}</h2>
                            <h2 className="text-lg"><b>Aptidão em Energia Reversa (ER): </b>{personagem.aptidao.energia_reversa}</h2>

                        </ul>

                    </div>

                </div>
            </div>


            {/* Habilidades */}
            <ul className="max-w-300 flex flex-col items-center w-full gap-10 mt-10">
                {personagem.aptidao.aptidoes.map((aptidao, num)=>(

                    <div key={num} className="w-full">
                        <h1 className="text-white text-shadow-lg/60 w-full text-right">Obtida no Nível {aptidao.obtida_no_nivel}</h1>
                        <CardHabilidade habilidade={aptidao}/>
                    </div>

                ))}
            </ul>


        </section>
    )
}