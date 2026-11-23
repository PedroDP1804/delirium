import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/src/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/src/components/ui/tooltip"
import type { JSX } from "react";

export function Informativo({texto, icone}:{texto:string, icone:JSX.Element}) {
    return (
        <>
            <div className="max-[800px]:hidden">
                <Tooltip>
                    <TooltipTrigger className="hover:bg-gray-400 h-8 w-8 flex justify-center items-center rounded-lg">
                        {icone}
                    </TooltipTrigger>
                    <TooltipContent className="whitespace-pre-wrap">
                        {texto}
                    </TooltipContent>
                </Tooltip>
            </div>
            <div className="min-[800px]:hidden">
                <Dialog>
                    <DialogTrigger className="cursor-pointer hover:bg-gray-300 p-1 rounded-lg">{icone}</DialogTrigger>
                    <DialogContent className="whitespace-pre-wrap">
                        <DialogTitle>Informações</DialogTitle>
                        <div className="text-justify">
                            {texto}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}

export function InformativoGrande({titulo, texto, icone}:{titulo:string, texto:string, icone:JSX.Element}) {
    return (
        <Dialog>
            <DialogTrigger className="cursor-pointer hover:bg-gray-300 p-1 rounded-lg">{icone}</DialogTrigger>
            <DialogContent className="whitespace-pre-wrap">
                <DialogTitle>{titulo}</DialogTitle>
                <div className="text-justify">
                    {texto}
                </div>
            </DialogContent>
        </Dialog>
    )
}