import dotenv from "dotenv";

dotenv.config();

fixture("Testes de API - Loja Petstore");

test("Deve retornar o inventário da loja", async (t) => {
  const resposta = await t.request({
    url: process.env.URL_API + "/store/inventory",
    method: "GET",
  });

  await t.expect(resposta.status).eql(200);
  await t.expect(typeof resposta.body).eql("object");
});

test("Deve criar pedido na loja", async (t) => {
  const pedido = {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2025-09-08T11:17:52.851Z",
    status: "placed",
    complete: true,
  };

  const resposta = await t.request({
    url: process.env.URL_API + "/store/order",
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: pedido,
  });

  await t.expect(resposta.status).eql(200);
  await t.expect(resposta.body.status).eql("placed");
});
