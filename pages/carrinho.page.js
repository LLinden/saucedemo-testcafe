import { Selector, t } from "testcafe";

class CarrinhoPage {
  constructor() {
    this.quantidadeDeItens = Selector('[data-test="item-quantity"');
  }

  async quantidadeItensCarrinho() {
    return await this.quantidadeDeItens.innerText;
  }
}

export default new CarrinhoPage();
