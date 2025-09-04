import loginPage from "../../pages/login.page";
import dotenv from "dotenv";

// carrega variáveis do .env
dotenv.config();

fixture("Testes de Login").page(process.env.URL_BASE);

test("Login com sucesso", async (t) => {
  await loginPage.login(
    process.env.USUARIO_VALIDO,
    process.env.SENHA_USER_VALIDO
  );
  await t
    .expect(await t.eval(() => window.location.href))
    .eql(process.env.URL_POS_LOGIN);
});

test.only("Login com usuário inválido", async (t) => {
  const mensagemErroEsperada =
    "Epic sadface: Username and password do not match any user in this service";
  await loginPage.login(
    process.env.USUARIO_INVALIDO,
    process.env.SENHA_USER_VALIDO
  );
  const mensagemErroObtida = await loginPage.mensagemErro();
  console.log(mensagemErroObtida + "OBTIDA");
  console.log(mensagemErroEsperada + "ESPERADA");
  await t.expect(mensagemErroObtida).eql(mensagemErroEsperada);
});
