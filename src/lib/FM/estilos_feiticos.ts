type EstiloCor = {
    texto_cor: string,
    bg_nome: string,
    bg_secoes: string,
}

export function estilo_cor(cor:string):EstiloCor {
    switch (cor) {

        case "Vermelho":
            return {
                texto_cor: "text-[#d40000] text-shadow-lg/20",
                bg_nome: "bg-[url(/bg-vermelho.png)]",
                bg_secoes: "bg-[url(/bg-vermelho.png)]",
            }

        case "Verde":
            return {
                texto_cor: "text-[#00e927] text-shadow-lg/60",
                bg_nome: "bg-[url(/bg-verde.png)]",
                bg_secoes: "bg-[url(/bg-verde.png)]",
            }

        case "Azul":
            return {
                texto_cor: "text-[#1028ff] text-shadow-lg/30",
                bg_nome: "bg-[url(/bg-azul.png)]",
                bg_secoes: "bg-[url(/bg-azul.png)]",
            }

        case "Amarelo":
            return {
                texto_cor: "text-[#ffe600] text-shadow-lg/50",
                bg_nome: "bg-[url(/bg-amarelo.png)]",
                bg_secoes: "bg-[url(/bg-amarelo.png)]",
            }

        // ... Violeta, Rosa, Marrom, Laranja

        case "Branco":
            return {
                texto_cor: "text-white text-shadow-lg/90",
                bg_nome: "bg-[url(/bg-branco.png)]",
                bg_secoes: "bg-[url(/bg-branco.png)]",
            }

        case "Preto":
            return {
                texto_cor: "text-black text-shadow-lg text-shadow-gray-500",
                bg_nome: "bg-[url(/bg-preto.png)]",
                bg_secoes: "bg-[url(/bg-preto.png)]",
            }

        case "Sem Cor":
            return {
                texto_cor: "text-gray-500",
                bg_nome: "bg-[url(/bg-cinza.png)]",
                bg_secoes: "bg-[url(/bg-cinza.png)]",
            }

        // case "Variável":
        //     return {
        //         texto_cor: "text-gray-500",
        //         bg_nome: "bg-[url(/bg-cinza.png)]",
        //         bg_secoes: "bg-[url(/bg-cinza.png)]",
        //     }

        default:
            return {
                texto_cor: "text-gray-500",
                bg_nome: "bg-[url(/bg-cinza.png)]",
                bg_secoes: "bg-[url(/bg-cinza.png)]",
            }
    }
}
