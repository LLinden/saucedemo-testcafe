import loginPage from "../pages/login.page";
import dotenv from "dotenv";

// carrega variáveis do .env
dotenv.config();

fixture("Teste de Login").page(process.env.URL_BASE);

test("Login com sucesso", async (t) => {
  await loginPage.loginSucesso(process.env.USUARIO_VALIDO, process.env.SENHA_USER_VALIDO);
  await t
    .expect(await t.eval(() => window.location.href))
    .eql(process.env.URL_POS_LOGIN);
});