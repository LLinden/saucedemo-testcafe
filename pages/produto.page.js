import { Selector, t } from "testcafe";

class ProdutoPage {
  constructor() {
    this.botaoPrimeiroAddCarrinho = Selector("button")
      .withText("Add to cart")
      .nth(0);

    this.iconeCarrinho = Selector('[data-test="shopping-cart-link"');
  }

  async adicionaProdutoCarrinho() {
    await t.click(this.botaoPrimeiroAddCarrinho);
  }

  async acessaCarrinho() {
    await t.click(this.iconeCarrinho);
  }
}
export default new ProdutoPage();
