import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.inputUsuario = Selector("#user-name");
    this.inputSenha = Selector("#password");
    this.botaoLogin = Selector("#login-button");
    this.mensagemErro = Selector('[data-test="error"]');
  }

  async login(usuario, senha) {
    await t
      // paste true para digitar texto todo de uma vez e não letra por letra
      .typeText(this.inputUsuario, usuario, { paste: true })
      .typeText(this.inputSenha, senha, { paste: true })
      .click(this.botaoLogin);
  }

  async mensagemErroLogin() {
    return this.mensagemErro.innerText;
  }
}

export default new LoginPage();
