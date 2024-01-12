import { Produto } from "../produtos/produto.dto";

export type NFCeItem = {
    id: string;
    produto: Produto;
    valor: number;
    quantidade: number;
}