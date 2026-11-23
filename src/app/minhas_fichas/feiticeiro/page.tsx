"use client"
import { AbaPrincipal } from "../_components/aba_principal";
import { Abas } from "../_components/abas";
import { useState } from "react";
import { angelo } from "@/src/lib/FM/angelo";
import { AbaTécnica } from "../_components/aba_tecnica";
import { AbaHabilidades } from "../_components/aba_habilidades";
import { AbaAptidões } from "../_components/aba_aptidoes";
import { AbaTestesEPerícias } from "../_components/aba_testes_pericias";
import { AbaInventário } from "../_components/aba_inventario";

export default function Home() {

  const [aba, setAba] = useState<number>(0)


  return (
    <main className="
      flex flex-col items-center gap-15
      h-full min-h-[120vh] pb-50
      bg-fixed bg-cover bg-[url(/bg-feiticeiro.png)]
    ">
      
      <Abas atual={aba} funcao={setAba}/>

      {(()=>{
        switch (aba) {
          case 0:
            return <AbaPrincipal personagem={angelo}/>
          case 1:
            return <AbaTécnica personagem={angelo}/>
          case 2:
            return <AbaHabilidades personagem={angelo}/>
          case 3:
            return <AbaAptidões personagem={angelo}/>
          case 4:
            return <AbaTestesEPerícias personagem={angelo}/>
          case 5:
            return <AbaInventário personagem={angelo}/>
          default:
            return null
        }
      })()}
      {/*  */}


    </main>
  );
}
