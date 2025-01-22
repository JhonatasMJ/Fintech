import { Dispatch } from "react";

export interface IDataContext {
    data: IVenda[] | null;
    loading: boolean;
    error: string | null;
    inicio: string;
    final: string;
    setInicio: Dispatch<React.SetStateAction<string>>;
    setFinal: Dispatch<React.SetStateAction<string>>;
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

