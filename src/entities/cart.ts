import { Product } from "./products";

export class Cart {
    private static _products: Product[] = [];
    private static _total: number = 0;

    static calculateTotal() {
        this._total = 0;

        this._products.forEach((item) => {
            this._total += item.total;
        })
    }

    static addToCart(product: Product) {
        //Atualiza o total da compra
        //Verificar se o produto existe no carrinho

        const productExists = this._products.includes(product);

        //se o produto não estiver no carrinho, execute
        if(!productExists) {
            this._products.push(product);
        }

        this._total += product.total;
        
        this._products.push(product);
    }
    static get products() {
        return this._products;
    }
    static get total() {
        return this._total;
  }
}