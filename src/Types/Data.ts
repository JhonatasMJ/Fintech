import { Dispatch, SetStateAction } from "react";

export interface IDataContext {
    data: IVenda[] | null;
    loading: boolean;
    error: string | null;
    inicio: string;
    final: string;
    setInicio: Dispatch<SetStateAction<string>>;
    setFinal: Dispatch<SetStateAction<string>>;
}

export interface IVenda {
    id: string;
    nome: string;
    preco: number;
    status: "pago" | "processando" | "falha"
    pagamento: "boleto" | "cartao" | 'pix';
    data: string;
    parcelas: number | null
}


export interface VendaDia {
    data:string,
    pago:number,
    processando:number,
    falha:number
}


/* Copia da interface IVenda e tira o data */
export type VendaSemData = Omit<IVenda, 'data'>