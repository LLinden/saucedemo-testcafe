import { fixture } from "testcafe";
import loginPage from "../../pages/login.page";
import produtoPage from "../../pages/produto.page";
import carrinhoPage from "../../pages/carrinho.page";
import dotenv from "dotenv";

dotenv.config();

fixture("Testes Página de Produto").page(process.env.URL_BASE);

test("Adiciona produto no carrinho com sucesso", async (t) => {
  await produtoPage.adicionaProdutoCarrinho();
  await produtoPage.acessaCarrinho();

  const quantidadeItensCarrinho =
    await carrinhoPage.quantidadeItensCarrinho();
  await t.expect(quantidadeItensCarrinho).eql("1");
}).before(async (t) => {
  await loginPage.login(
    process.env.USUARIO_VALIDO,
    process.env.SENHA_USER_VALIDO
  );
});
