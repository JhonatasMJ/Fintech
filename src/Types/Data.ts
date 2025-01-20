export interface IDataContext {
    data: IVenda[] | null;
    loading: boolean;
    error: string | null
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

