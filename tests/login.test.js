import { Selector } from "testcafe";
import dotenv from "dotenv";

// carrega variáveis do .env
dotenv.config();

fixture('Teste de Login').page(process.env.URL_BASE);

test("Login com sucesso", async (t) => {

    const inputUsuário = Selector('#user-name');
    const inputSenha = Selector('#password');
    const botaoLogin = Selector('#login-button');

    await t
        .typeText(inputUsuário, process.env.USUARIO_VALIDO)
        .typeText(inputSenha, process.env.SENHA_VALIDA)
        .click(botaoLogin);
    
    await t.expect(await t.eval(() => window.location.href)).eql(process.env.URL_POS_LOGIN);
});
